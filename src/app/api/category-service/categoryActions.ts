import { Category } from './dto/category';
import { PAGE, PAGE_SIZE } from '../../config/appConfig';
import { CategoriesParams } from './params/categoriesParams';
import { client } from '../global/apiClient';

export const getCategories = (params?: CategoriesParams) => {
	const {page, pageSize, q } = params ?? {};
	const queryParams = {
		q,
		attributesToSearchOn: ['name'],
		// attributesToRetrieve: ['name', 'shortDescription', 'tg', 'id'],
		hitsPerPage: pageSize ?? PAGE_SIZE,
		page: page ?? PAGE,
	};
	return client.index('category').search<Category>('', queryParams);
};
