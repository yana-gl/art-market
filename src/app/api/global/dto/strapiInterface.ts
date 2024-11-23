export type Pagination = {
    page?: number;
    pageCount?: number;
    pageSize?: number;
    total?: number;
}
export type Meta = {
    pagination?: Pagination;
}

export type StrapiObject<T> = {
    data: T;
    meta?: Meta;
}

export type StrapiArray<T> = {
    data: Array<T>;
    meta?: Meta;
}

export type MeilisearchArray<T> = {
    hits: Array<T>;
    hitsPerPage: number;
    page: number;
    totalHits: number;
    totalPages: number;
}
