import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import './App.scss';
import Contacts from './pages/Contacts';

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: theme.palette.primary.light,
    height: '100%',
    overflow: 'auto',
    // margin: '1rem',
    padding: '1rem',
  },
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Contacts />
    </div>
  );
}
