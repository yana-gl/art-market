import './artistCard.scss';
import { Wrapper } from '../../components/global/wrapper/wrapper';
import clsx from 'classnames';
import { ProductsMini } from '../../components/products/products';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Artist } from '../../api/product-service/dto/artist';
import { cmsUrl, getArtist } from '../../api/product-service/productActions';

export function ArtistCard() {
    const [ item, setItem ] = useState<Artist>();

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            getArtist(params.id).then(res => {
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
                            src={`${cmsUrl}${item.photo?.data.attributes.url}`}
                            className={'product-card__img'}
                        />
                    </div>
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
                            </div>
                        </div>
                        <span
                            className={'body-1-black'}
                        >
                            {item.shortDescription}
                        </span>
                        <a
                            href={`https://t.me/${item.tg}`}
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
            }
            {
                item?.id &&
                <ProductsMini hasTitle={false} authorId={item?.id}/>
            }
        </Wrapper>
    )
}
