import './artistCard.scss';
import { artistsTestData } from '../../assets/data/testData';
import { Wrapper } from '../../components/global/wrapper/wrapper';
import clsx from 'classnames';
import { ProductsMini } from '../../components/products/products';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export function ArtistCard() {
    const item =  artistsTestData[0];
    const tg = 'yana_gl8';

    const params = useParams();
    // const [ artist, setArtist ] = useState<Artist>();

    useEffect(()=> {
        // axios.get(`http://localhost:5000/posts/${params.id}`)
        // .then(res => {
        //     console.log(res)
        //     setPosts(res.data)
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
    }, [params.id])

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
