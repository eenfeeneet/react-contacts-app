import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { SubmitButton, EditButton } from './Buttons';
import { EditContactForm } from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export const ShowDetails = ({ data }) => {
  const { id, fullName, initials, firstName, surName, phone, gender } = data;
  console.log(data);

  return (
    <Grid container direction='column' spacing={3}>
      <Grid item xs={10}>
        <TextField
          value={firstName}
          id='fname'
          label='First Name'
          variant='outlined'
          size='small'
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={10}>
        <TextField
          value={surName}
          id='sname'
          label='Surname'
          variant='outlined'
          size='small'
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={10}>
        <TextField
          value={phone}
          id='phone'
          label='Phone Number'
          variant='outlined'
          size='small'
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />
      </Grid>

      <Grid item xs={3}>
        <EditButton />
      </Grid>
    </Grid>
  );
};

export function ContactCard({ data }) {
  const classes = useStyles();
  const [isEditing, setIsEditing] = useState(false);
  console.log(data);

  const cardContent = isEditing ? (
    <EditContactForm data={data} />
  ) : (
    <ShowDetails data={data} />
  );
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>{cardContent}</CardContent>
      {/* <CardMedia
        className={classes.cover}
        image='/static/images/cards/live-from-space.jpg'
        title='Live from space album cover'
      /> */}
    </Card>
  );
}
