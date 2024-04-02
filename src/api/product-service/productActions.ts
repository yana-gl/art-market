import axios from 'axios';
import { Artist } from './dto/artist';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { Product } from './dto/product';
import { SimpleObjectInterface } from '../global/dto/category';

const token = '94b79d980c2b1376ade06afc097687d0000c8b6dc7f173364d0ac304b8787e78f1e33c0e90c836d43ace00aa21706eeae51cc68b7d28522efb26ab142e09739c411d869793f1b57e90feea5a2f7d161dba98967ea020ca1c1e0b8746355ea604e1fe6f5f97fcc09f380e648dd994c2d6e87710867500429e0fc3b37067bb255e';
export const headers = { Authorization: `Bearer ${token}` };
const populateParams = { populate: '*' };
export const cmsUrl = 'http://localhost:1337';
export const path = `${cmsUrl}/api`;
const pathToArtists = `${path}/artists`;
const pathToProducts = `${path}/products`;

export type ProductStrapiInterface = {
  id: string;
  name: string;
  artist: StrapiObject<Artist>;
  price: number;
  category: StrapiObject<SimpleObjectInterface>;
  description?: string;
  photos: StrapiArray<{url: string}>;
}

// Получить список художников
export const getArtists: () => Promise<Artist[]> = () => axios.get<StrapiArray<Artist>>(
    pathToArtists,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return response.data.data.map(it => Object.assign({ id: it.id }, it.attributes));
});

// Получить список товаров
export const getProducts: () => Promise<Product[]> = () => axios.get<StrapiArray<ProductStrapiInterface>>(
  pathToProducts,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return response.data.data.map(it => Object.assign(
    { id: it.id },
    it.attributes,
    { artist: Object.assign({ id: it.attributes.artist.data.id }, it.attributes.artist.data.attributes) },
  ));
});

// Получить список товаров
export const getProductsByAuthor: (id: string) => Promise<Product[]> = (id) => axios.get<StrapiArray<ProductStrapiInterface>>(
  `${pathToProducts}?filters\[artist\][id][$eq]=${id}`,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return response.data.data.map(it => Object.assign(
    { id: it.id },
    it.attributes,
    { artist: Object.assign({ id: it.attributes.artist.data.id }, it.attributes.artist.data.attributes) },
  ));
});

// Получить товар
export const getProduct: (id: string) => Promise<Product> = (id: string) => axios.get<StrapiObject<ProductStrapiInterface>>(
  `${pathToProducts}/${id}`,
    { headers, params: Object.assign({}, populateParams) }
).then((response) => {
  window.console.log(response);
  return Object.assign(
    { id: response.data.data.id },
    response.data.data.attributes,
    { artist: Object.assign({ id: response.data.data.attributes.artist.data.id }, response.data.data.attributes.artist.data.attributes) },
    { category: Object.assign({ id: response.data.data.attributes.category.data.id }, response.data.data.attributes.category.data.attributes) },
  );
});

// Получить товар
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
