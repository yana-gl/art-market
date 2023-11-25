import './card.scss';
import clsx from 'classnames';
import { ReactNode } from 'react';
import frame from '../../../assets/img/png/frame.png';
import { Link } from 'react-router-dom';

export interface CardProps {
    item: {
        id: string;
    },
    children: ReactNode;
}

export function Card({ item, children }: CardProps) {
    return (
        <Link
            to={`/products/{id}`}
        >
            <div
                className={'card'}
            >
                <div
                    className={'card__container'}
                >
                    <img
                        src={frame}
                        className={'card__frame'}
                    />
                    <img
                        src={`products/${item.id}.jpeg`}
                        className={'card__img'}
                    />
                </div>
                <div
                    className={clsx('card__description', 'body-1-black')}
                >
                {children}
                </div>
            </div>
        </Link>
    )
}
