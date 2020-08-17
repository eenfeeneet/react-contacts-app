import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { ContactsContext } from '../ContactsContext';

const SearchBar = () => {
  const [[allContacts]] = useContext(ContactsContext);
  const { contacts } = allContacts;

  const options = contacts.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id='grouped-demo'
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label='Search' variant='outlined' />
      )}
    />
  );
};

export default SearchBar;
