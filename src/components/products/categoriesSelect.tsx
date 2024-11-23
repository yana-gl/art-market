import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getCategories } from '@/app/api/category-service/categoryActions';
import { useEffect, useState } from 'react';
import { Category } from '@/app/api/category-service/dto/category';

export default function CategoriesSelect() {
    const [ items, setItems ] = useState<Category[]>([]);
    const [ selected, setSelected ] = useState<Category[]>([]);
    const [ searchString, setSearchString ] = useState<string>();

    useEffect(() => {
        window.console.log(searchString);
        getCategories({ searchString }).then((res) => {
            setItems(res);
        })
    }, [ searchString ]);

  return (
      <Autocomplete
        multiple
        fullWidth={true}
        id="tags-outlined"
        options={items}
        getOptionLabel={(option) => option.name}
        value={selected ?? []}
        onChange={(e, value) => {
          window.console.log(value);
          setSelected(value)
        }}
        isOptionEqualToValue={(optional, value) => optional?.id === value?.id}
        renderInput={(params) => (
          <TextField
            {...params}
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            label={'Категории'}
          />
        )}
      />
  );
}
