import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { ContactList } from '../components/ContactList';
import NavSearchBar from '../components/NavSearchBar';

const useStyles = makeStyles((theme) => ({
  page: {
    height: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  listContainer: {
    height: '90%',
    overflow: 'auto',
  },
}));

export default function Contacts() {
  const classes = useStyles();
  useEffect(() => {
    console.log('Main Page Mounted');
  }, []);
  return (
    <Container className={classes.page} maxWidth='sm' disableGutters={true}>
      <NavSearchBar />
      <Container className={classes.listContainer} maxWidth='sm'>
        <ContactList />
      </Container>
    </Container>
  );
}
