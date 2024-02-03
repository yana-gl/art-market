import { SimpleObjectInterface } from '../../global/dto/category';
import { Artist } from './artist';

export type Product = {
    id: string;
    name: string;
    author: Artist;
    price: number;
    category: SimpleObjectInterface;
    description?: string;
};
