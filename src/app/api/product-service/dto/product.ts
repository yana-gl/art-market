import { Artist } from '../../artist-service/dto/artist';
import { SimpleObjectInterface } from '../../global/dto/category';
import { Photo } from '../../global/dto/photo';
import { StrapiArray } from '../../global/dto/strapiInterface';

export type Product = {
    documentId: string;
    name: string;
    artist: Artist;
    price: number;
    category: SimpleObjectInterface;
    description?: string;
    photos?: Photo[];
};
