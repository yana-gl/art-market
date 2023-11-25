import { JSXElementConstructor, useCallback, MouseEvent, useRef, useState } from 'react';
import { Slide } from '../slide/slide';
import { Image } from '../../models/image';
import { CloseProps, ControlsProps } from '../../models/elementsProps';
import './imgView.scss';

export type ImgViewProps = {
    // Изображения для просмотра
    images: Image[],
    // Закрытие просмотра
    close: () => void,
    // Индекс выбранного начального изображения для просмотра
    initIndex: number,
    // Флаг, закрывать ли просмотр при клике вне изображения
    closeOnOutsideClick?: boolean;
    // Компонент управления просмотром (стрелки "влево", "вправо" + счётчик под слайдом)
    controls?: JSXElementConstructor<ControlsProps>;
    // Компонент для скролла влево (position: absolute)
    absoluteLeftControl?: JSXElementConstructor<ControlsProps>;
    // Компонент для скролла вправо (position: absolute)
    absoluteRightControl?: JSXElementConstructor<ControlsProps>;
    // Компонент закрытия просмотра
    closeComponent?: JSXElementConstructor<CloseProps>;
}

export function ImgView(props: ImgViewProps) {
    const [ currentIndex, setCurrentIndex ] = useState<number>(0);
    const slidesRef = useRef<HTMLDivElement>(null);
    const {
        images, close, initIndex, closeOnOutsideClick,
        controls: Controls, closeComponent: CloseComponent,
        absoluteLeftControl: AbsoluteLeftControl, absoluteRightControl: AbsoluteRightControl,
    } = props;

    /**
     * Устанавливаем значение currentIndex в зависимости от положения элемента со скроллом
     */
    const handleScroll = useCallback(() => {
        const scrollLeft = slidesRef.current?.scrollLeft;
        if (scrollLeft && Math.round(scrollLeft / window.innerWidth) !== currentIndex) {
            setCurrentIndex(Math.round(scrollLeft / window.innerWidth));
        }
    }, [currentIndex]);

    /**
     * Cкроллим к начальному элементу, который был задан вне imgView, в компоненте галереи
     */
    const scrollToInitIndex = () => {
        if (initIndex && slidesRef.current && window.innerWidth) {
            slidesRef.current.scrollTo({
                left: initIndex * window.innerWidth,
                behavior: "smooth"
            });
        }
    };

    /**
     * Плавно скроллим влево на один слайд
     */
    const scrollLeft = (e: MouseEvent) => {
        closeOnOutsideClick && e.stopPropagation();
        if (currentIndex && slidesRef.current && window.innerWidth) {
            slidesRef.current.scrollTo({
                left: (currentIndex - 1) * window.innerWidth,
                behavior: "smooth"
            });
        }
    };

    /**
     * Плавно скроллим вправо на один слайд
     */
    const scrollRight = (e: MouseEvent) => {
        closeOnOutsideClick && e.stopPropagation();
        if (currentIndex + 1 < images.length && slidesRef.current) {
            slidesRef.current.scrollTo({
                left: (currentIndex + 1) * window.innerWidth,
                behavior: "smooth"
            });
        }
    };

    // Если все изображения загружены, скроллим  к начальному элементу
    const checkLoad = (() => {
        let imagesLoaded = 0;
        return () => {
            imagesLoaded++;
            if (imagesLoaded == images.length) {
                scrollToInitIndex();
            }
        };
    })();

    return <div
        className={'img-view'}
        onClick={closeOnOutsideClick ? close : undefined}
    >
        {
            CloseComponent && <CloseComponent
                close={close}
            />
        }
        <div
            className={'img-view__slides'}
            ref={slidesRef}
            onScroll={handleScroll}
        >
            {
                images.map((image, key) => <Slide
                    key={key}
                    image={image}
                    onLoadCallBack={checkLoad}
                />)
            }
        </div>
        {
            Controls && <Controls
                slideLeft={scrollLeft}
                slideRight={scrollRight}
                close={close}
                currentIndex={currentIndex}
                imagesCount={images.length}
            />
        }
        {
            AbsoluteLeftControl && <AbsoluteLeftControl
                slideLeft={scrollLeft}
                slideRight={scrollRight}
                close={close}
                currentIndex={currentIndex}
                imagesCount={images.length}
            />
        }
        {
            AbsoluteRightControl && <AbsoluteRightControl
                slideLeft={scrollLeft}
                slideRight={scrollRight}
                close={close}
                currentIndex={currentIndex}
                imagesCount={images.length}
            />
        }
    </div>
}
