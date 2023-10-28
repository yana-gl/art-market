import './artistCardDescription.scss';
import clsx from 'classnames';

export interface CardProps {
    item: {
        name: string;
        author: string;
        price: number;
    },
}

export function ArtistDescription({ item }: CardProps) {
    return (
        <div
            className={clsx('artist-description', 'body-1-black')}
        >
            <div
                className={'artist-description__container'}
            >
                <span
                    className={clsx('label-2-black')}
                >
                    {item.name}
                </span>
                <span>
                    {item.author}
                </span>
            </div>
            <span
                className={clsx('artist-description__price')}
            >
                {item.price} ₽
            </span>
        </div>
    )
}
