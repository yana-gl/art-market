import axios from 'axios';
import { Artist } from './dto/artist';
import { StrapiArray, StrapiData } from '../global/dto/strapiInterface';
import { Product } from './dto/product';

const token = '94b79d980c2b1376ade06afc097687d0000c8b6dc7f173364d0ac304b8787e78f1e33c0e90c836d43ace00aa21706eeae51cc68b7d28522efb26ab142e09739c411d869793f1b57e90feea5a2f7d161dba98967ea020ca1c1e0b8746355ea604e1fe6f5f97fcc09f380e648dd994c2d6e87710867500429e0fc3b37067bb255e';
const headers = { Authorization: `Bearer ${token}` };
const populateParams = { populate: '*' };
const path = 'http://localhost:1337/api/';
const pathToArtists = `${path}artists`;
const pathToProducts = `${path}products`;

// Получить список художников
export const getArtists: () => Promise<Artist[]> = () => axios.get<StrapiArray<Artist>>(
    pathToArtists,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return response.data.data.map(it => Object.assign({ id: it.id }, it.attributes));
});

// Получить список товаров
export const getProducts: () => Promise<Product[]> = () => axios.get<StrapiData<Product>[]>(
  pathToProducts,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  return response.data.map(it => Object.assign({ id: it.id }, it.attributes));
});
