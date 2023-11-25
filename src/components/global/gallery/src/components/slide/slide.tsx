import { Image } from '../../models/image';
import './slide.scss';

interface SlideProps {
    // Изображение в слайде
    image: Image,
    // После загрузки изображения продвигаемся на нужный слайд 
    onLoadCallBack: () => void;
}

export function Slide(props: SlideProps) {
    const { image, onLoadCallBack } = props
    const { src, alt } = image;

    return <div
        className={'slide'}
    >
        <img
            src={src}
            alt={alt ?? 'slideImage'}
            className={'slide__img'}
            onLoad={onLoadCallBack}
            onClick={(e) => e.stopPropagation()}
        />
    </div>
}
