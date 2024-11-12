import './artists.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Card } from '../global/card/card';
import { ArtistDescription } from '../global/artistDescription/artistDescription';
import { Link } from 'react-router-dom';
import { Artist } from '@/app/api/artist-service/dto/artist';
import { getArtists } from '@/app/api/artist-service/artistActions';
// TODO: FIX SCROLL
// import { useHorizontalScroll } from './scrollHook';

export function ArtistsSlider() {
    const [ items, setItems ] = useState<Artist[]>([]);
    // const scrollRef = useHorizontalScroll();

    useEffect(() => {
        getArtists().then(artists => {
            setItems(artists);
            window.console.log(artists);
        });
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
            <div
                className='artists-slider__slider'
                // ref={scrollRef}
            >
                {
                    items.map((it, index) => <div
                        key={index}
                        className={clsx(
                            'artists-slider__card',
                            `artists-slider__card--${index}`
                    )}
                    >
                        <Card
                            isArtist={true}
                            item={it}
                            key={it.id}
                            photoUrl={it.photo?.url}
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
                        className={clsx('body-1-white')}
                    >
                        Посмотреть всех
                    </button>
                </Link>
            </div>
        </div>
    )
}
