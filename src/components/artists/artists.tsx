import './artists.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Card } from '../global/card/card';
import { ArtistDescription } from '../global/artistDescription/artistDescription';
import { Artist } from '@/app/api/artist-service/dto/artist';
import { getArtists } from '@/app/api/artist-service/artistActions';

export function Artists() {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Artist[][]>([]);
    const [ artistsTestData, setArtistsTestData ] = useState<Artist[]>([]);

    useEffect(() => {
        getArtists().then(artists => {
            setArtistsTestData(artists);
            window.console.log(artists);
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // делим по 3 столбца
            if (window.innerWidth >= 992) {
                const column1: Artist[] = [];
                const column2: Artist[] = [];
                const column3: Artist[] = [];
                artistsTestData.map((it, index) => {
                    if (index % 3 === 0) {
                        column1.push(it);
                    }
                    if (index % 3 === 1) {
                        column2.push(it);
                    }
                    if (index % 3 === 2) {
                        column3.push(it);
                    }
                });
                setColumnsNumber(3);
                setItems([ column1, column2, column3 ]);
            }
            else if (window.innerWidth < 992) {
                setColumnsNumber(2);
                const column1: Artist[] = [];
                const column2: Artist[] = [];
                artistsTestData.map((it, index) => {
                    if (index % 2 === 0) {
                        column1.push(it);
                    }
                    if (index % 2 === 1) {
                        column2.push(it);
                    }
                });
                setItems([ column1, column2 ]);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [columnsNumber, artistsTestData]);

    return (
        <div className={'artists'}>
            <h2
                className={clsx(
                    'title-1-black',
                    'artists__title'
                )}
            >
                ХУДОЖНИКИ
            </h2>
            <div className={clsx(
                'artists__table',
                `artists__table--${columnsNumber}`
            )}>
                {
                    items.map((array, index) => {
                        return (
                            <div
                                className={clsx(
                                    'artists__table-column',
                                    index === 1 && 'artists__table-column--second',
                                    index === 2 && 'artists__table-column--third',
                                )}
                                key={index}
                            >
                                {
                                    array.map(it => (<Card
                                        isArtist={true}
                                        item={it}
                                        key={it.id}
                                        photoUrl={it.photo?.url}
                                    >
                                        <ArtistDescription
                                            item={it}
                                        />
                                    </Card>))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
