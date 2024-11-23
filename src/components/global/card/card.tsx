import './card.scss';
import clsx from 'classnames';
import { ReactNode } from 'react';
import frame from '../../../assets/img/png/frame.png';
import { Link } from 'react-router-dom';
import { cmsUrl } from '@/app/config/appConfig';

export interface CardProps {
    item: {
        id: string;
    },
    photoUrl?: string;
    children: ReactNode;
    isArtist?: boolean;
}

export function Card({ item, children, isArtist=false, photoUrl }: CardProps) {
    return (
        <Link
            to={`/${isArtist ? 'artists' : 'products'}/${item.id}`}
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
                        src={`${cmsUrl}${photoUrl}`}
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
