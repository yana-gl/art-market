import './artists.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { artistsTestData } from '../../assets/data/testData';
import { Card } from '../global/card/card';
import { ArtistDescription } from '../global/artistDescription/artistDescription';

export type Artist = {
    id: string;
    name: string;
    shortDescription: string;
}

export function Artists() {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Artist[][]>([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setColumnsNumber(3);
                setItems([
                    [artistsTestData[0], artistsTestData[1]],
                    [artistsTestData[2], artistsTestData[3]],
                    [artistsTestData[4], artistsTestData[5]],
                ]);
            }
            else if (window.innerWidth < 992) {
                setColumnsNumber(2);
                setItems([
                    [artistsTestData[0], artistsTestData[1], artistsTestData[2]],
                    [artistsTestData[3], artistsTestData[4], artistsTestData[5]]
                ]);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [columnsNumber]);

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
            <div className='artists__table'>
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
                                        item={it}
                                        key={it.id}
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
