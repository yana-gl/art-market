import { Artist } from '../../../api/product-service/dto/artist';
import './artistDescription.scss';
import clsx from 'classnames';

export interface ArtistDescriptionProps {
    item: Artist,
}

export function ArtistDescription({ item }: ArtistDescriptionProps) {
    return (
        <div
            className={clsx('artist-description', 'body-1-black')}
        >
            <span className={clsx('label-2-black')}>
                {item.name}
            </span>
            <span>
                {item.shortDescription}
            </span>
        </div>
    )
}
