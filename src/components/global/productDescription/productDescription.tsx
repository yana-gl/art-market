import './productDescription.scss';
import clsx from 'classnames';

export interface ProductDescriptionProps {
    item: {
        name: string;
        author: string;
        price: number;
    },
}

export function ProductDescription({ item }: ProductDescriptionProps) {
    return (
        <div
            className={clsx('description', 'body-1-black')}
        >
            <div
                className={'description__container'}
            >
                <span className={clsx('label-2-black')}>
                    {item.name}
                </span>
                <span>
                    {item.author}
                </span>
            </div>
            <span
                className={clsx('description__price')}
            >
                {item.price} ₽
            </span>
        </div>
    )
}
