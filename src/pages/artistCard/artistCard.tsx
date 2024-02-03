import './artistCard.scss';
import { artistsTestData } from '../../assets/data/testData';
import { Wrapper } from '../../components/global/wrapper/wrapper';
import clsx from 'classnames';
import { Link } from 'react-router-dom';
import { ProductsMini } from '../../components/products/products';

export function ArtistCard() {
    const item =  artistsTestData[0];
    const tg = 'yana_gl8';

    return (
        <Wrapper>
            <div
                className={'product-card'}
            >
                <div
                    className={'product-card__images'}
                >
                    <img
                        src={`../products/21.jpeg`}
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
                        href={`https://t.me/${tg}`}
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
            <ProductsMini hasTitle={false}/>
        </Wrapper>
    )
}
