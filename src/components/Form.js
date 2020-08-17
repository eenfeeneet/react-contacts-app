import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from '../ContactsContext';
import { checkForMatch, checkStrInputFields } from '../lib/objectUtils';
import { splitNames, getInitials } from '../lib/stringUtils';
import { SubmitButton } from './Buttons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  radio: {
    display: 'flex',
  },
}));

export function AddContactForm() {
  const classes = useStyles();
  const [
    [allContacts, setAllContacts],
    [newContact, setNewContact],
    [existingFields, setExistingFields],
    [errorMsg],
  ] = useContext(ContactsContext);

  const { contacts } = allContacts;

  const createNewContact = () => {
    // split full name & get firstnames, surnames
    const nameObj = splitNames(newContact.fullName);
    console.log(nameObj);
    const { firstName, surName } = nameObj;

    // get initials
    const { initials } = getInitials(newContact.fullName);

    setNewContact((prevContact) => ({
      ...prevContact,
      initials: initials,
      firstName: firstName,
      surName: surName,
      isCreated: true,
    }));
  };

  const addToAllContacts = () => {
    // const nData = {
    //   id: newContact.id,
    //   initials: newContact.initials,
    //   firstName: newContact.firstName,
    //   surName: newContact.surName,
    //   gender: newContact.gender,
    // };

    setAllContacts(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nFullName = e.target.value;

    setNewContact((prevContact) => ({
      ...prevContact,
      fullName: nFullName,
    }));
    console.log(newContact);
  };
  const handlePhoneChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nPhone = e.target.value;

    setNewContact((prevContact) => ({
      ...prevContact,
      phone: nPhone,
    }));
  };
  const handleGenderChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nGender = e.target.value;
    setNewContact((prevContact) => ({
      ...prevContact,
      gender: nGender,
    }));
  };
  const handleSubmit = () => {
    console.log('trying to add');
    createNewContact();
    console.log(newContact);
  };

  // Run once when component mounts
  // Set Id for new Contact
  useEffect(() => {
    console.log('Modal Form mounted');
    const nId = contacts.length + 1;
    console.log('new id: ', nId);
    setNewContact((prevContact) => ({
      ...prevContact,
      id: nId,
    }));
    console.log('new contact id set');

    return () => {
      setNewContact({ isCreated: false, gender: 'other' });

      console.log('Modal Form unmounted');
      console.log(newContact);
    };
  }, [contacts]);

  // Check state for changes and compare with existing contacts
  // Returns true if match found
  useEffect(() => {
    console.log('\n===================');
    console.log('Update happened');
    console.log(newContact);
  }, [newContact]);

  // Checks if NewContact is created(boolean)
  // if true, adds NewContact to list of contacats
  useEffect(() => {
    if (newContact.isCreated) {
      addToAllContacts();
    }
  }, [newContact]);

  return (
    <Card className={classes.root}>
      <CardHeader title='Add Contact' />
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container direction='column' spacing={3}>
            <Grid item xs={10}>
              <TextField
                error={existingFields.name}
                helperText={existingFields.name ? errorMsg.name : ''}
                onChange={handleNameChange}
                // onFocus={resetNameInput}
                required
                id='name'
                label='Name'
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                type='tel'
                error={existingFields.phone}
                helperText={existingFields.phone ? errorMsg.phone : ''}
                required
                onChange={handlePhoneChange}
                // onFocus={resetPhoneInput}
                id='phone'
                label='Phone Number'
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <RadioGroup
                row
                className={classes.radio}
                aria-label='gender'
                name='gender1'
                value={newContact.gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={3}>
              <SubmitButton
                handleClick={handleSubmit}
                reset={existingFields.phone}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}

export function EditContactForm() {
  const classes = useStyles();
  const [
    [allContacts, setAllContacts],
    [newContact, setNewContact],
    [existingFields, setExistingFields],
    [errorMsg],
  ] = useContext(ContactsContext);

  const { contacts } = allContacts;

  const createNewContact = () => {
    // split full name & get firstnames, surnames
    const nameObj = splitNames(newContact.fullName);
    console.log(nameObj);
    const { firstName, surName } = nameObj;

    // get initials
    const { initials } = getInitials(newContact.fullName);

    setNewContact((prevContact) => ({
      ...prevContact,
      initials: initials,
      firstName: firstName,
      surName: surName,
      isCreated: true,
    }));
  };

  const addToAllContacts = () => {
    // const nData = {
    //   id: newContact.id,
    //   initials: newContact.initials,
    //   firstName: newContact.firstName,
    //   surName: newContact.surName,
    //   gender: newContact.gender,
    // };

    setAllContacts(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  const handleNameChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nFullName = e.target.value;

    setNewContact((prevContact) => ({
      ...prevContact,
      fullName: nFullName,
    }));
    console.log(newContact);
  };
  const handlePhoneChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nPhone = e.target.value;

    setNewContact((prevContact) => ({
      ...prevContact,
      phone: nPhone,
    }));
  };
  const handleGenderChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const nGender = e.target.value;
    setNewContact((prevContact) => ({
      ...prevContact,
      gender: nGender,
    }));
  };
  const handleSubmit = () => {
    console.log('trying to add');
    createNewContact();
    console.log(newContact);
  };

  // Run once when component mounts
  // Set Id for new Contact
  useEffect(() => {
    console.log('Modal Form mounted');
    const nId = contacts.length + 1;
    console.log('new id: ', nId);
    setNewContact((prevContact) => ({
      ...prevContact,
      id: nId,
    }));
    console.log('new contact id set');

    return () => {
      setNewContact({ isCreated: false, gender: 'other' });

      console.log('Modal Form unmounted');
      console.log(newContact);
    };
  }, [contacts]);

  // Check state for changes and compare with existing contacts
  // Returns true if match found
  useEffect(() => {
    console.log('\n===================');
    console.log('Update happened');
    console.log(newContact);
  }, [newContact]);

  // Checks if NewContact is created(boolean)
  // if true, adds NewContact to list of contacats
  useEffect(() => {
    if (newContact.isCreated) {
      addToAllContacts();
    }
  }, [newContact]);

  return (
    <Card className={classes.root}>
      <CardHeader title='Add Contact' />
      <CardContent>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container direction='column' spacing={3}>
            <Grid item xs={10}>
              <TextField
                error={existingFields.name}
                helperText={existingFields.name ? errorMsg.name : ''}
                onChange={handleNameChange}
                // onFocus={resetNameInput}
                required
                id='name'
                label='Name'
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                type='tel'
                error={existingFields.phone}
                helperText={existingFields.phone ? errorMsg.phone : ''}
                required
                onChange={handlePhoneChange}
                // onFocus={resetPhoneInput}
                id='phone'
                label='Phone Number'
                variant='outlined'
                size='small'
                fullWidth
              />
            </Grid>
            <Grid item xs={10}>
              <RadioGroup
                row
                className={classes.radio}
                aria-label='gender'
                name='gender1'
                value={newContact.gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio />}
                  label='Male'
                />
                <FormControlLabel
                  value='other'
                  control={<Radio />}
                  label='Other'
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={3}>
              <SubmitButton
                handleClick={handleSubmit}
                reset={existingFields.phone}
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
