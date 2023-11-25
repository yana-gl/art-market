import './products.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Product } from '../../pages/first/first';
import { productsTestData } from '../../assets/data/testData';
import { Card } from '../global/card/card';
import { ProductDescription } from '../global/productDescription/productDescription';
import { Link } from 'react-router-dom';

export function ProductsMini() {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Product[][]>([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setColumnsNumber(3);
                setItems([
                    [productsTestData[0], productsTestData[1]],
                    [productsTestData[2], productsTestData[3]],
                    [productsTestData[4], productsTestData[5]],
                ]);
            }
            else if (window.innerWidth < 992) {
                setColumnsNumber(2);
                setItems([
                    [productsTestData[0], productsTestData[1], productsTestData[2]],
                    [productsTestData[3], productsTestData[4], productsTestData[5]]
                ]);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [columnsNumber]);

    return (
        <div className={'products'}>
            <h2
                className={clsx(
                    'title-1-black',
                    'products__title'
                )}
            >
                ТОВАРЫ
            </h2>
            <div className='products__table'>
                {
                    items.map((array, index) => {
                        return (
                            <div
                                className={clsx(
                                    'products__table-column',
                                    index === 1 && 'products__table-column--second',
                                    index === 2 && 'products__table-column--third',
                                )}
                                key={index}
                            >
                                {
                                    array.map(it => <Link
                                        key={it.id}
                                        to={'/product'}
                                    >
                                        <Card
                                            item={it}
                                        >
                                            <ProductDescription item={it}/>
                                        </Card>
                                    </Link>)
                                }
                            </div>
                        )
                    })
                }
            </div>
            <Link
                to={'/products'}
            >
                <button
                    className={clsx('label-2-black')}
                >
                    Посмотреть всех
                </button>
            </Link>
        </div>
    )
}

export function Products() {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Product[][]>([]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setColumnsNumber(3);
                setItems([
                    [productsTestData[0], productsTestData[1], productsTestData[2]],
                    [productsTestData[3], productsTestData[4], productsTestData[5]],
                    [productsTestData[6], productsTestData[7], productsTestData[8]],
                ]);
            }
            else if (window.innerWidth < 992) {
                setColumnsNumber(2);
                setItems([
                    [productsTestData[0], productsTestData[1], productsTestData[2], productsTestData[3]],
                    [productsTestData[4], productsTestData[5], productsTestData[6], productsTestData[7], productsTestData[8]]
                ]);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [columnsNumber]);

    return (
        <div className={'products'}>
            <h2
                className={clsx(
                    'title-1-black',
                    'products__title'
                )}
            >
                ТОВАРЫ
            </h2>
            <div className='products__table'>
                {
                    items.map((array, index) => {
                        return (
                            <div
                                className={clsx(
                                    'products__table-column',
                                    index === 1 && 'products__table-column--second',
                                    index === 2 && 'products__table-column--third',
                                )}
                                key={index}
                            >
                                {
                                    array.map(it => <Card
                                        item={it}
                                        key={it.id}
                                    >
                                        <ProductDescription item={it}/>
                                    </Card>)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
