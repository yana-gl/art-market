import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getCategories } from '@/app/api/category-service/categoryActions';
import { useEffect, useState } from 'react';
import { Category } from '@/app/api/category-service/dto/category';

export interface CategoriesSelectProps {
    onChange: (value: Category[]) => void;
}

export default function CategoriesSelect({ onChange }: CategoriesSelectProps) {
    const [ items, setItems ] = useState<Category[]>([]);
    const [ selected, setSelected ] = useState<Category[]>([]);
    const [ searchString, setSearchString ] = useState<string>();

    useEffect(() => {
        window.console.log(searchString);
        getCategories({ q: searchString }).then((res) => {
            setItems(res.hits);
        })
    }, [ searchString ]);

    return (
        <Autocomplete
            multiple
            fullWidth={true}
            id={'tags-outlined'}
            options={items}
            getOptionLabel={(option) => option.name}
            value={selected ?? []}
            onChange={(_e, value) => {
                window.console.log(value);
                setSelected(value);
                onChange(value);
            }}
            isOptionEqualToValue={(optional, value) => optional?.id === value?.id}
            renderInput={(params) => (
                <TextField
                    {...params}
                    value={searchString}
                    label={'Категории'}
                />
            )}
            noOptionsText={'Категория не найдена'}
            onInputChange={(_event, newInputValue) => setSearchString(newInputValue)}
        />
    );
}
