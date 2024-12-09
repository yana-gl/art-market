import { PaginationParams } from '../../global/params/paginationParams';

export type ProductsParams = {
    artistId?: string;
    categoryIds?: string[];
} & PaginationParams;
