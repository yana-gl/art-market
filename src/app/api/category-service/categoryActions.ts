import axios from 'axios';
import { Category } from './dto/category';
import { StrapiArray } from '../global/dto/strapiInterface';
import { cmsApiUrl, populateParams, headers } from '../../config/appConfig';
import { CategoriesParams } from './params/categoriesParams';

const pathToCategories = `${cmsApiUrl}/categories`;

export const getCategories = (params?: CategoriesParams) => {
	const { searchString } = params ?? {};
	// const url = searchString ?  `${pathToCategories}?filters[name][$containsi]=${searchString}` : pathToCategories;
	const url = `${pathToCategories}?filters[name][$contains]=${'ак'}`;

	return axios.get<StrapiArray<Category>>(
		url,
		{
			headers,
			params: Object.assign({
				// sort: 'name:asc',
			}, populateParams),
		}
	).then(response => response.data.data);
};
