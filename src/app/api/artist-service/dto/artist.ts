import { Photo } from "../../global/dto/photo";

export type Artist = {
    id: string;
    name: string;
    shortDescription: string;
    photo: Photo;
    tg: string;
}
