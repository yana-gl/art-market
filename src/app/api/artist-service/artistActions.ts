import axios from 'axios';
import { Artist } from './dto/artist';
import { cmsApiUrl, populateParams, headers, PAGE, PAGE_SIZE } from '../../config/appConfig';
import { ArtistsParams } from './params/artistsParams';
import { client } from '../global/apiClient';

const pathToArtists = `${cmsApiUrl}/artists`;

export const getArtists = (params?: ArtistsParams) => {
	const {page, pageSize} = params ?? {};
    return client.index('artist').search<Artist>('',{
		attributesToSearchOn: ['name', 'shortDescription', 'tg'],
		// attributesToRetrieve: ['name', 'shortDescription', 'tg', 'id'],
		hitsPerPage: pageSize ?? PAGE_SIZE,
		page: page ?? PAGE,
	});
};

export const getArtist: (id: string) => Promise<Artist> = (id: string) => axios.get(
	`${pathToArtists}/${id}`,
	{ headers, params: Object.assign({}, populateParams) }
).then(response => {
	const artist = {
		id: response.data.data.id,
		...response.data.data.attributes,
		photo: response.data.data.attributes.photo.data.attributes,
	};
	return artist;
});
