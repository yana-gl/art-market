import './first.scss';
import { Header } from '../../components/global/header/header';
import { Products } from '../../components/products/products';
import { ArtistsSlider } from '../../components/artistsSlider/artistsSlider';

export type Product = {
    id: string;
    name: string;
    author: string;
    price: number;
}

export function First() {
    return (
        <>
            <Header/>
            <ArtistsSlider/>
            <Products/>
        </>
    )
}
