import axios from 'axios';
import { Product } from './dto/product';
import { cmsApiUrl, headers, PAGE, PAGE_SIZE, populateParams } from '@/app/config/appConfig';
import { ProductsParams } from './params/productsParams';
import { client } from '../global/apiClient';

const pathToProducts = `${cmsApiUrl}/products`;

export const getProducts = (params?: ProductsParams) => {
	const {page, pageSize, id} = params ?? {};
	const url = id ? `${pathToProducts}?filters[artist][id][$eq]=${id}` : pathToProducts;
	// return axios.get<StrapiArray<Product>>(
	// 	url,
	// 	{
	// 		headers,
	// 		params: Object.assign({
	// 			pagination: {
	// 				page: page ?? PAGE,
	// 				pageSize: pageSize ?? PAGE_SIZE,
	// 			}
	// 		}, populateParams),
	// 	}
	// ).then(response => response.data);
	return client.index('product').search<Product>('',{
		attributesToSearchOn: ['name', 'shortDescription', 'tg'],
		// attributesToRetrieve: ['name', 'shortDescription', 'tg', 'id'],
		hitsPerPage: pageSize ?? PAGE_SIZE,
		page: page ?? PAGE,
	});
};

export const getProduct: (id: string) => Promise<Product> = (id: string) => axios.get(
  `${pathToProducts}/${id}`,
    { headers, params: Object.assign({}, populateParams) }
).then(response => {
	window.console.log(response);
	const product = {
		id: response.data.data.id,
		...response.data.data.attributes,
		category: {
			id: response.data.data.attributes.category.data.id,
			...response.data.data.attributes.category.data.attributes,
		},
		photos: response.data.data.attributes.photos.data.map((it) => ({
			id: it.id,
			...it.attributes,
		})),
		artist: {
			id: response.data.data.attributes.artist.data.id,
			...response.data.data.attributes.artist.data.attributes,
		},
	};
	window.console.log(product);
	return product;
});
