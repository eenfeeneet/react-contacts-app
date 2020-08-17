import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from '../ContactsContext';

const SearchBar = () => {
  const [
    [allContacts, setAllContacts],
    [newContact, setNewContact],
    [existingFields, setExistingFields],
    [errorMsg, setErrorMsg],
    [searchedContacts, setSearchedContacts],
    [selectedContact, setSelectedContact],
  ] = useContext(ContactsContext);

  const { contacts } = allContacts;
  const [value, setValue] = useState();
  const [inputValue, setInputValue] = useState();

  // const { id } = value;

  const options = contacts.map((option) => {
    const firstLetter = option.firstName[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

  return (
    <Autocomplete
      id='grouped-demo'
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      getOptionLabel={(option) => option.firstName + ' ' + option.surName}
      getOptionSelected={(option, value) =>
        option.firstName === value.firstName
      }
      groupBy={(option) => option.firstLetter}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      // inputValue={inputValue}
      // onInputChange={(event, newInputValue) => {
      //   setInputValue(newInputValue);
      // }}
      style={{ width: '90%' }}
      renderInput={(params) => (
        <TextField {...params} label='Search' variant='outlined' />
      )}
    />
  );
};

export default SearchBar;
