import { StrapiObject } from '../../global/dto/strapiInterface';

export type Artist = {
    id: string;
    name: string;
    shortDescription: string;
    photo: StrapiObject<{url: string}>;
    tg: string;
}
