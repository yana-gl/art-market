import { SimpleObjectInterface } from '../../global/dto/category';
import { StrapiArray } from '../../global/dto/strapiInterface';
import { Artist } from './artist';

export type Product = {
    id: string;
    name: string;
    artist: Artist;
    price: number;
    category: SimpleObjectInterface;
    description?: string;
    photos?: StrapiArray<{url: string}>;
};
