import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  addButton: {
    marginRight: theme.spacing(1),
    height: '100%',
  },
}));

export const AddButton = ({ handleClick }) => {
  const classes = useStyles();
  return (
    <IconButton className={classes.addButton} edge='end' onClick={handleClick}>
      <AddCircleIcon />
    </IconButton>
  );
};
export const SaveButton = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <SaveIcon />
    </IconButton>
  );
};
export const DeleteButton = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <DeleteIcon />
    </IconButton>
  );
};
export const EditButton = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <EditIcon />
    </IconButton>
  );
};
export const SubmitButton = ({ handleClick, reset, handleReset }) => {
  return (
    <Button
      variant='contained'
      color='primary'
      // disabled={validated}
      onClick={handleClick}
      type={reset ? `reset` : 'button'}
    >
      {reset ? 'Reset' : 'Create'}
    </Button>
  );
};
