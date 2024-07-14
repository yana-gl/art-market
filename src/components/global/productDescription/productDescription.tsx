import { Product } from '../../../app/api/product-service/dto/product';
import './productDescription.scss';
import clsx from 'classnames';

export interface ProductDescriptionProps {
    item: Product,
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
                    {item.artist.name}
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
