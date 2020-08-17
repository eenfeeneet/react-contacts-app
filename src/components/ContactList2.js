import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { useContext, useEffect } from 'react';
import { ContactsContext } from '../ContactsContext';

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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper} elevation={3}>
        <ListItem button onClick={handleClick}>
          <ListItemAvatar>
            <Avatar>{contact.initials}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={fullName} secondary={contact.phone} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary='Starred' />
            </ListItem>
          </List>
        </Collapse>
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
    return a < b ? -1 : a > b ? 1 : 0;
  };
  const sortedList = contacts
    .map((contact) => <ContactItem key={contact.id} contact={contact} />)
    .sort((a, b) => {
      return a < b ? -1 : a > b ? 1 : 0;
    });

  const sContact = <ContactItem contact={contact} />;

  useEffect(() => {
    console.log('List generated');
    console.log(contacts.length + ' contacts in list');
  }, [contacts]);

  useEffect(() => {
    console.log('Contact Selected');
    console.log(contact);
  }, [selected]);

  return <List className={classes.list}>{sortedList}</List>;
};
