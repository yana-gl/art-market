import { JSXElementConstructor, ReactNode, useState } from 'react';
import { ImgView } from '../imgView/imgView';
import { Image } from '../../models/image';
import { CloseProps, ControlsProps } from '../../models/elementsProps';
import './gallery.scss';

export type GalleryProps = {
    // ДЛЯ ГАЛЕРЕИ

    // Изображения для показа в галерее
    images: Image[];
    // Компонент обёртки для изображений
    galleryLayout?: JSXElementConstructor<{ children: ReactNode }>;

    // ДЛЯ ПРЕДПРОСМОТРА

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
    // Компонент закрытия просмотра
    onImgClick?: (id: string) => void;
}

export function Gallery(props: GalleryProps) {
    const {
        images, closeOnOutsideClick, galleryLayout: GalleryLayout,
        controls, closeComponent, absoluteLeftControl, absoluteRightControl, onImgClick
    } = props;

    const [ viewIndex, setViewIndex ] = useState<number>(-1);

    /**
     * Возвращает кол-во столбцов в галерее
     */
    const getColumnsCount = (): number => {
        switch (true) {
            case images.length === 1: {
                return 1;
            }
            case images.length === 2:
            case images.length % 4 === 0: {
                return 2;
            }
            default: {
                return 3;
            }
        }
    }

    /**
     * Возвращает изображения
     */
    const getImages = (): ReactNode => images.map(
        ({ src, alt, id }, index) =>
            <img
                key={index}
                className={'gallery__image'}
                src={src}
                alt={alt ?? 'gallery-image'}
                onClick={() => onImgClick?.(id)}
            />
    );

    return <>
        {
            GalleryLayout
                ? <GalleryLayout>
                    {getImages()}
                </GalleryLayout>
                : <div
                    className={'gallery'}
                    style={{ gridTemplateColumns: `repeat(${getColumnsCount()}, 1fr)` }}
                >
                    {getImages()}
                </div>
        }
        {
            viewIndex > -1 &&
            <ImgView
                images={images}
                close={() => setViewIndex(-1)}
                initIndex={viewIndex}
                controls={controls}
                closeComponent={closeComponent}
                absoluteLeftControl={absoluteLeftControl}
                absoluteRightControl={absoluteRightControl}
                closeOnOutsideClick={closeOnOutsideClick}
            />
        }
    </>;
}
