import { Photo } from "../../global/dto/photo";

export type Artist = {
    documentId: string;
    name: string;
    shortDescription: string;
    photo: Photo;
    tg: string;
}
