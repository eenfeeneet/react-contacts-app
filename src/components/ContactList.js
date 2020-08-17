import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useContext, useEffect, useState } from 'react';
import { ContactsContext } from '../ContactsContext';
import { ContactCardModal } from './Modal';

const useStyles = makeStyles((theme) => ({
  list: {},
  paper: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const ContactItem = ({ contact }) => {
  const classes = useStyles();
  const fullName = contact.firstName + ' ' + contact.surName;

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const handleClick = (setOpen) => {
  //   setOpen(!open);
  // };

  // console.log(contact);

  // const handleClick = () => {
  //   alert('open modal');
  // };

  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={3}>
        <ListItem button onClick={handleOpen}>
          <ListItemAvatar>
            <Avatar>{contact.initials}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={fullName} secondary={contact.phone} />
        </ListItem>
        <ContactCardModal
          data={contact}
          open={open}
          handleClose={handleClose}
        />
      </Paper>
    </React.Fragment>
  );
};

export const ContactList = () => {
  const classes = useStyles();
  const [
    [allContacts, setAllContacts],
    [newContact, setNewContact],
    [existingFields, setExistingFields],
    [errorMsg, setErrorMsg],
    [searchedContacts, setSearchedContacts],
    [selectedContact, setSelectedContact],
  ] = useContext(ContactsContext);

  const { contacts } = allContacts;
  const { selected, contact } = selectedContact;

  const order = (a, b) => {
    return a.fullName < b.fullName ? -1 : a.fullName > b.fullName ? 1 : 0;
  };

  const sortedContacts = contacts.sort(order);

  const sortedList = sortedContacts.map((contact) => (
    <ContactItem key={contact.id} contact={contact} />
  ));

  const sContact = <ContactItem contact={contact} />;

  useEffect(() => {
    console.log('List Sorted');
    console.log(sortedContacts);
  }, [sortedContacts]);

  return <List className={classes.list}>{sortedList}</List>;
};
