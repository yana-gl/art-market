import './products.scss';
import clsx from 'classnames';
import { useEffect, useState } from 'react';
import { Card } from '../global/card/card';
import { ProductDescription } from '../global/productDescription/productDescription';
import { Product } from '../../app/api/product-service/dto/product';
import { getProducts } from '../../app/api/product-service/productActions';
import { Pagination } from '@mui/material';
import CategoriesSelect from './categoriesSelect';

interface ProductsProps {
    authorId?: string;
    hasTitle?: boolean;
}

export function Products({ authorId, hasTitle = true }: ProductsProps) {
    const [ columnsNumber, setColumnsNumber ] = useState<number>();
    const [ items, setItems ] = useState<Product[][]>([]);
    const [ productsTestData, setProductsTestData ] = useState<Product[]>([]);
    const [ pageCount, setPageCount ] = useState<number>(1);
    const [ categoryIds, setCategoryIds ] = useState<string[]>([]);
    const [ page, setPage ] = useState<number>(1);

    useEffect(() => {
        getProducts({
            page,
            categoryIds,
            artistId: authorId,
            // todo: убрать
            pageSize: 3,
        }).then((data) => {
            setPageCount(data.totalPages);
            setProductsTestData(data.hits);
        });
    }, [ page, authorId, categoryIds ]);

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
            <CategoriesSelect onChange={selectedCategories => setCategoryIds(selectedCategories.map(it => it.id))}/>
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
                                        photoUrl={it.photos?.[0].url}
                                    >
                                        <ProductDescription item={it}/>
                                    </Card>)
                                }
                            </div>
                        )
                    })
                }
            </div>
            <Pagination
                count={pageCount}
                page={page}
                onChange={(_e, value) => setPage(value)}
                shape={'rounded'}
            />
        </div>
    )
}
