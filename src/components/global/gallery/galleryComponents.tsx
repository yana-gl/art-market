import clsx from 'classnames'; 
import './gallery.scss';
import { CloseProps, ControlsProps } from './src';
import close from '../../../assets/img/svg/close.svg';
import arrow from '../../../assets/img/svg/slide-arrow.svg';
import { ReactNode } from 'react';

export const getLayoutModifier = (imagesCount: number): string => {
    const postAttachmentsCount = imagesCount ?? 0;
    switch (true) {
        case postAttachmentsCount === 1: {
            return '--one-element';
        }
        case postAttachmentsCount === 2:
        case postAttachmentsCount % 4 === 0: {
            return '--two-columns';
        }
        case postAttachmentsCount % 3 === 0: {
            return '--three-columns';
        }
        case postAttachmentsCount === 5: {
            return '--five-elements';
        }
        default: {
            return '--three-columns';
        }
    }
};

export const AbsoluteLeftControl = (props: ControlsProps) => (
    <div
        className={clsx('controller', 'controller--left')}
    >
         <img
            src={arrow}
            className={clsx(
                'controls__arrow',
                !props.currentIndex && 'controls__arrow--disabled',
            )}
            onClick={props.slideLeft}
        />
    </div>
)

export const AbsoluteRightControl = (props: ControlsProps) => (
    <div
        className={clsx('controller', 'controller--right')}
    >
        <img
            src={arrow}
            className={clsx(
                'controls__arrow',
                'controls__arrow--right',
                props.currentIndex + 1 === props.imagesCount && 'controls__arrow--disabled',
            )}
            onClick={props.slideRight}
        />
    </div>
)

export const ProgressBar = (props: ControlsProps) => {
    const imagesIndexes: number[] = [];
    for (let i = 0; i < props.imagesCount; i++) {
        imagesIndexes.push(i);
    }
    return (<div
        className={'progress-bar'}
    >
        {imagesIndexes.map((i) => (
            <div
                key={i}
                className={clsx(
                    'progress-bar__el',
                    `progress-bar__el--${props.currentIndex === i ? 'blue' : 'white'}`,
                )}
            />
        ))}
    </div>)
}

export const CloseComponent = (closeProps: CloseProps) => (
    <div
        className={'close'}
        onClick={closeProps.close}
    >
        <img
            src={close}
        />
    </div>
)

export const CloseTextComponent = (closeProps: CloseProps) => (
    <div
        className={'close-text'}
    >
        CLICK&nbsp;
        <span
            onClick={closeProps.close}
            className={'close-text__link'}
        >
            THIS&nbsp;
        </span>
        TO CLOSE
    </div>
)

export const Controls = (props: ControlsProps) => (
    <div
        className={'controls'}
    >
        <span>
            {props.currentIndex + 1} / {props.imagesCount}
        </span>
    </div>
)

export const GalleryLayout = ({children}: {children: ReactNode}) => {
    return <div
        className={'layout'}
    >
        {children}
    </div>
};
