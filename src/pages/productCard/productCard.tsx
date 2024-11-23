import './productCard.scss';
import { Wrapper } from '../../components/global/wrapper/wrapper';
import { Gallery, ImgView } from '../../components/global/gallery/src';
import { AbsoluteLeftControl, AbsoluteRightControl, CloseComponent, Controls, GalleryLayout } from '../../components/global/gallery/galleryComponents';
import { useEffect, useState } from 'react';
import clsx from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { getProduct } from '../../app/api/product-service/productActions';
import { Product } from '../../app/api/product-service/dto/product';
import { cmsUrl } from '@/app/config/appConfig';

export function ProductCard() {
    const [ mainImgId, setMainImgId ] = useState<number>(0);
    const [ viewIndex, setViewIndex ] = useState<number>(-1);
    const [ item, setItem ] = useState<Product>();
    const params = useParams<{id: string}>();

    useEffect(() => {
        if (params.id) {
            getProduct(params.id).then(res => {
                setItem(res);
            });
        }
    }, [params.id]);

    return (
        <Wrapper>
            {
                item &&
                <div
                    className={'product-card'}
                >
                    <div
                        className={'product-card__images'}
                    >
                        <img
                            src={`${cmsUrl}${item.photos?.[mainImgId].url}`}
                            className={'product-card__img'}
                            onClick={() => setViewIndex(mainImgId)}
                        />
                        <Gallery
                            onImgClick={setMainImgId}
                            galleryLayout={GalleryLayout}
                            images={item.photos?.map((it, index) => ({
                                id: index,
                                src: `${cmsUrl}${it.url}`,
                            })) ?? []}
                        />
                    </div>
                    <div
                        className={'product-card__right-side'}
                    >
                        {/* <span
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
                                {item.category.name}
                            </Link>
                        </span> */}
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
                                        to={`/artists/${item.artist.id}`}
                                        className={clsx('caption-1-grey', 'product-card__author')}
                                    >
                                        Автор: {item.artist.name}
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
                            <a
                                href={`https://t.me/${item.artist.tg}`}
                                target={'_blank'}
                            >
                                <button
                                    className={clsx('body-1-white')}
                                >
                                    Написать продавцу
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            }
            {
                viewIndex > -1 &&
                <ImgView
                    images={item?.photos?.map((it, index) => ({
                        id: index,
                        src: `${cmsUrl}${it.url}`,
                    })) ?? []}
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
