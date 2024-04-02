
export type StrapiData<T> = {
    id: string;
    attributes: Omit<T, 'id'>;
}

export type StrapiObject<T> = {
    data: StrapiData<T>;
}

export type StrapiArray<T> = {
    data: Array<StrapiData<T>>;
}
