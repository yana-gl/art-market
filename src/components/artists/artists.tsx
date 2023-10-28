import './artists.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Product } from '../../pages/first/first';
import { testData } from '../../pages/first/testData';
import { Card } from '../card/card';
import { ArtistDescription } from '../artistCardDescription/artistCardDescription';

export function Artists() {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Product[][]>([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1200) {
                setColumnsNumber(3);
                setItems([
                    [testData[0], testData[1], testData[2]],
                    [testData[3], testData[4], testData[5]],
                    [testData[6], testData[7], testData[8]],
                ]);
            }
            else if (window.innerWidth < 1200) {
                setColumnsNumber(2);
                setItems([
                    [testData[0], testData[1], testData[2], testData[3]],
                    [testData[4], testData[5], testData[6], testData[7], testData[8]]
                ]);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [columnsNumber]);

    return (
        <div
            className={'artists'}
        >
            <h2
                className={clsx(
                    'title-1-black',
                    'artists__title'
                )}
            >
                товары
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
