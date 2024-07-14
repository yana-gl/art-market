import axios from 'axios';
import { Artist } from './dto/artist';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { cmsUrl, populateParams, headers } from '../../config/appConfig';

const pathToArtists = `${cmsUrl}/artists`;

// Получить список художников
export const getArtists: () => Promise<Artist[]> = () => axios.get<StrapiArray<Artist>>(
    pathToArtists,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return response.data.data.map(it => Object.assign({ id: it.id }, it.attributes));
});

// Получить художника
export const getArtist: (id: string) => Promise<Artist> = (id: string) => axios.get<StrapiObject<Artist>>(
  `${pathToArtists}/${id}`,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return Object.assign(
    { id: response.data.data.id },
    response.data.data.attributes,
  );
});
