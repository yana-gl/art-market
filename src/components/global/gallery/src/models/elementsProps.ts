import { MouseEvent } from 'react';

export type CloseProps = {
    close: () => void,
}

export type ControlsProps = {
    slideLeft: (e: MouseEvent) => void,
    slideRight: (e: MouseEvent) => void,
    currentIndex: number,
    imagesCount: number,
} & CloseProps;
