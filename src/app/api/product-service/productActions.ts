import axios from 'axios';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { Product } from './dto/product';
import { cmsApiUrl, headers, PAGE, PAGE_SIZE, populateParams } from '@/app/config/appConfig';

const pathToProducts = `${cmsApiUrl}/products`;

export const getProducts: () => Promise<Product[]> = () => axios.get<StrapiArray<Product>>(
	pathToProducts,
		{ headers, params: Object.assign({}, populateParams) }
).then(response => response.data.data);

export const getProductsByAuthor: (id: string) => Promise<Product[]> = (id) => {
	return axios.get<StrapiArray<Product>>(
		`${pathToProducts}?filters[artist][documentId][$eq]=${id}`,
		{
			headers,
			params: Object.assign({
				pagination: {
					page: PAGE,
					pageSize: PAGE_SIZE,
				}
			}, populateParams),
		}
).then(response => response.data.data)};

export const getProduct: (id: string) => Promise<Product> = (id: string) => axios.get<StrapiObject<Product>>(
  `${pathToProducts}/${id}`,
    { headers, params: Object.assign({}, populateParams) }
).then(response => response.data.data);
