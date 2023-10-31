import './artists.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { artistsTestData } from '../../assets/data/testData';
import { Card } from '../global/card/card';
import { ArtistDescription } from '../global/artistDescription/artistDescription';
import { Link } from 'react-router-dom';

export type Artist = {
    id: string;
    name: string;
    products: string;
}

export function ArtistsSlider() {
    const [ items, setItems ] = useState<Artist[]>([]);

    useEffect(() => {
        setItems([
            artistsTestData[0], artistsTestData[1],
            artistsTestData[2], artistsTestData[3],
            artistsTestData[4]
        ]);
    }, []);

    return (
        <div className={'artists-slider'}>
            <h2
                className={clsx(
                    'title-1-black',
                    'artists__title'
                )}
            >
                ХУДОЖНИКИ
            </h2>
            <div className='artists-slider__slider'>
                {
                    items.map((it, index) => <div
                        className={clsx(
                            'artists-slider__card',
                            `artists-slider__card--${index}`
                    )}
                    >
                        <Card
                            item={it}
                            key={it.id}
                        >
                            <ArtistDescription
                                item={it}
                            />
                        </Card>
                    </div>
                )}
                <Link
                    to={'/artists'}
                >
                    <button
                        className={clsx('label-2-black')}
                    >
                        Посмотреть всех
                    </button>
                </Link>
            </div>
        </div>
    )
}
