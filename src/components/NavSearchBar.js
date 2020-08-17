import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { AddContactModal } from './Modal';
import SearchBar from './SearchBar';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: '5rem',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: theme.spacing(1),
  },
  search: {
    width: '75%',
  },
}));

const NavSearchBar = () => {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <SearchBar className={classes.search} />
        <AddContactModal />
      </Toolbar>
    </AppBar>
  );
};

export default NavSearchBar;
