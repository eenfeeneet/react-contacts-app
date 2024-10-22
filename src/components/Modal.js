import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AddButton } from './Buttons';
import { AddContactForm } from './Form';
import { ContactCard } from './Cards';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '75%',
    position: 'absolute',
    padding: theme.spacing(1),
    left: ' 50%',
    top: ' 50%',
    transform: `translate(-50%, -50%)`,
  },
}));

export const AddContactModal = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formModal = (
    <Paper className={classes.paper}>
      <AddContactForm />
    </Paper>
  );

  return (
    <React.Fragment>
      <AddButton className={classes.add} handleClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        {formModal}
      </Modal>
    </React.Fragment>
  );
};

export const ContactCardModal = ({ handleClose, open, data }) => {
  const classes = useStyles();

  const cardModal = (
    <Paper className={classes.paper}>
      <ContactCard data={data} />
    </Paper>
  );

  return (
    <React.Fragment>
      <Modal open={open} onClose={handleClose}>
        {cardModal}
      </Modal>
    </React.Fragment>
  );
};
