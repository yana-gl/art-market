import './products.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Card } from '../global/card/card';
import { ProductDescription } from '../global/productDescription/productDescription';
import { Link } from 'react-router-dom';
import { Product } from '../../app/api/product-service/dto/product';
import { getProducts, getProductsByAuthor } from '../../app/api/product-service/productActions';

export function ProductsMini({hasTitle=true, authorId}: {hasTitle?: boolean, authorId?: string}) {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Product[][]>([]);
    const [ productsTestData, setProductsTestData ] = useState<Product[]>([]);

    useEffect(() => {
        if (authorId) {
            getProductsByAuthor(authorId).then(products => {
                window.console.log(products[0].photos);
                setProductsTestData(products);
            });
        } else {
            getProducts().then(products => {
                window.console.log(products[0].photos);
                setProductsTestData(products);
            });
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            // делим по 3 столбца
            if (window.innerWidth >= 992) {
                const column1: Product[] = [];
                const column2: Product[] = [];
                const column3: Product[] = [];
                productsTestData.map((it, index) => {
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
                const column1: Product[] = [];
                const column2: Product[] = [];
                productsTestData.map((it, index) => {
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
    }, [columnsNumber, productsTestData]);

    return (
        <div className={'products'}>
            {
                hasTitle &&
                <h2
                    className={clsx(
                        'title-1-black',
                        'products__title'
                    )}
                >
                    ТОВАРЫ
                </h2>
            }
            <div className={clsx(
                'products__table',
                `products__table--${columnsNumber}`
            )}>
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
                                        photoUrl={it.photos?.data[0].attributes.url}
                                    >
                                        <ProductDescription item={it}/>
                                    </Card>)
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
                    className={clsx('body-1-white')}
                >
                    Посмотреть все
                </button>
            </Link>
        </div>
    )
}

export function Products() {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Product[][]>([]);
    const [ productsTestData, setProductsTestData ] = useState<Product[]>([]);

    useEffect(() => {
        getProducts().then(products => {
            setProductsTestData(products);
            window.console.log(products);
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            window.console.log(productsTestData);
            // делим по 3 столбца
            if (window.innerWidth >= 992) {
                const column1: Product[] = [];
                const column2: Product[] = [];
                const column3: Product[] = [];
                productsTestData.map((it, index) => {
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
                const column1: Product[] = [];
                const column2: Product[] = [];
                productsTestData.map((it, index) => {
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
    }, [columnsNumber, productsTestData]);

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
            <div className={clsx(
                'products__table',
                `products__table--${columnsNumber}`
            )}>
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
                                        photoUrl={it.photos?.data[0].attributes.url}
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
