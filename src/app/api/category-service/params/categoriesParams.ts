import { PaginationParams } from '../../global/params/paginationParams';

export type CategoriesParams = {
    searchString?: string;
} & PaginationParams;
