import axios from 'axios';
import { Artist } from './dto/artist';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { cmsApiUrl, populateParams, headers } from '../../config/appConfig';

const pathToArtists = `${cmsApiUrl}/artists`;

export const getArtists: () => Promise<Artist[]> = () => axios.get<StrapiArray<Artist>>(
    pathToArtists,
    { headers, params: Object.assign({}, populateParams) }
).then(response => response.data.data);

export const getArtist: (id: string) => Promise<Artist> = (id: string) => axios.get<StrapiObject<Artist>>(
	`${pathToArtists}/${id}`,
	{ headers, params: Object.assign({}, populateParams) }
).then(response => response.data.data);
