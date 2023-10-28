import './first.scss';
import { Header } from '../../components/header/header';
import { Artists } from '../../components/artists/artists';

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
            <Artists/>
        </>
    )
}
