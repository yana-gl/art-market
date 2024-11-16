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
        isOptionEqualToValue={(optional, value) => optional?.documentId === value?.documentId}
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

// export default function CategoriesSelect() {
//     const [ items, setItems ] = useState<Category[]>();
//     useEffect(() => {
//         getCategories().then((res) => {
//             setItems(res);
//         })
//     }, []);

//     return (
//       <Autocomplete
//         multiple={true}
//         id="country-select-demo"
//         sx={{ width: 300 }}
//         options={items}
//         autoHighlight
//         getOptionLabel={(option) => option.name}
//         value={[]}
//         renderOption={(props, option) => {
//           const { key, ...optionProps } = props;
//           return (
//             <Box
//               key={key}
//               component="li"
//               sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
//               {...optionProps}
//             >
//                 {option.name}
//             </Box>
//           );
//         }}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Choose a country"
//             // slotProps={{
//             //   htmlInput: {
//             //     ...params.inputProps,
//             //     autoComplete: 'new-password', // disable autocomplete and autofill
//             //   },
//             // }}
//           />
//         )}
//       />
//     );
//   }
  



// export interface ServiceSelectProps {
//     control: any;
// }

// export function CategoriesSelect() {
//     const [ value, setValue ] = useState<any>();
   

//     return (
//         <Select
//                         labelId={'services-select-id'}
//                         fullWidth={true}
//                         multiple={true}
//                         value={value ?? []}
//                         // onChange={onChange}
//                         autoWidth={true}
//                         required={true}
//                         renderValue={(selected: any) => (
//                             <Box sx={{
//                                 display: 'flex', flexWrap: 'wrap', gap: 0.5, width: '100%',
//                                 '& .Mui-disabled': {
//                                     WebkitTextFillColor: 'black !important',
//                                 },
//                             }}>
//                                 {selected.map((value: any) => (
//                                     <Chip
//                                         key={value}
//                                         // label={getRoleLabel(value)}
//                                     />
//                                 ))}
//                             </Box>
//                         )}
//                     >
//                         {
//                             // Object.values(ServiceEnum)
//                             //     .map(value => <MenuItem
//                             //         key={value.value}
//                             //         value={value.value}
//                             //     >
//                             //         {value.name}
//                             //     </MenuItem>)
//                         }
//                     </Select>
//     );
// }

