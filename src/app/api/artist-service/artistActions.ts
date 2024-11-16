import axios from 'axios';
import { Artist } from './dto/artist';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { cmsApiUrl, populateParams, headers, PAGE, PAGE_SIZE } from '../../config/appConfig';
import { ArtistsParams } from './params/artistsParams';

const pathToArtists = `${cmsApiUrl}/artists`;

export const getArtists = (params?: ArtistsParams) => {
	const {page, pageSize} = params ?? {};
	return axios.get<StrapiArray<Artist>>(
		pathToArtists,
		{
			headers,
			params: Object.assign({
				pagination: {
					page: page ?? PAGE,
					pageSize: pageSize ?? PAGE_SIZE,
				}
			}, populateParams),
		}
	).then(response => response.data.data);
};

export const getArtist: (id: string) => Promise<Artist> = (id: string) => axios.get<StrapiObject<Artist>>(
	`${pathToArtists}/${id}`,
	{ headers, params: Object.assign({}, populateParams) }
).then(response => response.data.data);
