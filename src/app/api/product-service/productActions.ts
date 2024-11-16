import axios from 'axios';
import { StrapiArray, StrapiObject } from '../global/dto/strapiInterface';
import { Product } from './dto/product';
import { cmsApiUrl, headers, PAGE, PAGE_SIZE, populateParams } from '@/app/config/appConfig';
import { ProductsParams } from './params/productsParams';

const pathToProducts = `${cmsApiUrl}/products`;

export const getProducts = (params?: ProductsParams) => {
	const {page, pageSize, id} = params ?? {};
	const url = id ? `${pathToProducts}?filters[artist][documentId][$eq]=${id}` : pathToProducts;
	return axios.get<StrapiArray<Product>>(
		url,
		{
			headers,
			params: Object.assign({
				pagination: {
					page: page ?? PAGE,
					pageSize: pageSize ?? PAGE_SIZE,
				}
			}, populateParams),
		}
	).then(response => response.data);
};

export const getProduct: (id: string) => Promise<Product> = (id: string) => axios.get<StrapiObject<Product>>(
  `${pathToProducts}/${id}`,
    { headers, params: Object.assign({}, populateParams) }
).then(response => response.data.data);
