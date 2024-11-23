import { Artist } from '../../artist-service/dto/artist';
import { SimpleObjectInterface } from '../../global/dto/simpleObjectInterface';
import { Photo } from '../../global/dto/photo';

export type Product = {
    id: string;
    name: string;
    artist: Artist;
    price: number;
    category: SimpleObjectInterface;
    description?: string;
    photos?: Photo[];
};
