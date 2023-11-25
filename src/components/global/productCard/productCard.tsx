import './productCard.scss';
import { productsTestData } from '../../../assets/data/testData';
import { Wrapper } from '../wrapper/wrapper';
import { Gallery, Image, ImgView } from '../gallery/src';
import { AbsoluteLeftControl, AbsoluteRightControl, CloseComponent, Controls, GalleryLayout } from '../gallery/galleryComponents';
import { useState } from 'react';
import clsx from 'classnames';
import { Link } from 'react-router-dom';

export function ProductCard() {
    const item =  productsTestData[0];
    const itemImages: Image[] = [
        {id: '1', src: `../products/${1}.jpeg`}, {id: '2', src: `../products/${2}.jpeg`}, {id: '3', src: `../products/${3}.jpeg`}, {id: '4', src: `../products/${4}.jpeg`},
        {id: '5', src: `../products/${5}.jpeg`}, {id: '6', src: `../products/${6}.jpeg`}, {id: '7', src: `../products/${7}.jpeg`}, {id: '8', src: `../products/${8}.jpeg`},
        {id: '9', src: `../products/${9}.jpeg`}, {id: '10', src: `../products/${10}.jpeg`}, {id: '11', src: `../products/${11}.jpeg`}, {id: '12', src: `../products/${12}.jpeg`},
    ];
    const [ mainImgId, setMainImgId ] = useState<string>('1');
    const [ viewIndex, setViewIndex ] = useState<number>(-1);

    return (
        <Wrapper>
            <div
                className={'product-card'}
            >
                <div
                    className={'product-card__images'}
                >
                    <img
                        src={`../products/${mainImgId}.jpeg`}
                        className={'product-card__img'}
                        onClick={() => setViewIndex(+mainImgId - 1)}
                    />
                    <Gallery
                        onImgClick={setMainImgId}
                        galleryLayout={GalleryLayout}
                        images={itemImages}
                    />
                </div>
                <div
                    className={'product-card__right-side'}
                >
                    <span
                        className={clsx('product-card__bread-crumbs', 'caption-1-grey')}
                    >
                        <Link
                            to={'/products'}
                        >
                            ТОВАРЫ
                        </Link>
                        /
                        <Link
                            // TODO: передавать id категории
                            to={'/products'}
                        >
                            {item.category}
                        </Link>
                    </span>
                    <div
                        className={'product-card__info'}
                    >
                        <div
                            className={'product-card__main-info'}
                        >
                            <div>
                                <div
                                    className={'title-2-black'}
                                >
                                    {item.name}
                                </div>
                                <Link
                                    to={`/products/{id}`}
                                    className={clsx('caption-1-grey', 'product-card__author')}
                                >
                                    Автор: {item.author}
                                </Link>
                            </div>
                            <div
                                className={clsx('label-1-black', 'product-card__price')}
                            >
                                {item.price} ₽
                            </div>
                        </div>
                        <span
                            className={'body-1-black'}
                        >
                            {item.description}
                        </span>
                        <button
                            className={clsx('label-2-black')}
                        >
                            Написать продавцу
                        </button>
                    </div>
                </div>
            </div>
            {
                viewIndex > -1 &&
                <ImgView
                    images={itemImages}
                    close={() => setViewIndex(-1)}
                    initIndex={viewIndex}
                    controls={Controls}
                    closeComponent={CloseComponent}
                    absoluteLeftControl={AbsoluteLeftControl}
                    absoluteRightControl={AbsoluteRightControl}
                    closeOnOutsideClick={true}
                />
            }
        </Wrapper>
    )
}
