
export type StrapiData<T> = {
    id: string;
    attributes: Omit<T, 'id'>;
}

export type StrapiObject<T> = {
    date: StrapiData<T>;
}

export type StrapiArray<T> = {
    date: {
        date: (StrapiData<T>)[];
    }
}
