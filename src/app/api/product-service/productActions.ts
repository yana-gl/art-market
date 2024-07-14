import axios from 'axios';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { Product } from './dto/product';
import { SimpleObjectInterface } from '../global/dto/category';
import { Artist } from '../artist-service/dto/artist';
import { cmsUrl, headers, populateParams } from '@/app/config/appConfig';

const pathToProducts = `${cmsUrl}/products`;

export type ProductStrapiInterface = {
  id: string;
  name: string;
  artist: StrapiObject<Artist>;
  price: number;
  category: StrapiObject<SimpleObjectInterface>;
  description?: string;
  photos: StrapiArray<{url: string}>;
}

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
