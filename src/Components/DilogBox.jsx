import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function AlertDialog({ formDetails, handleClose }) {
  const { name, email, guestEmail, message, workspace } = formDetails;
    
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'>
      <DialogTitle id='alert-dialog-title'>You are scheduled</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Name: {name} <br />
          Email: {email} <br />
          Guest Email: {guestEmail} <br />
          Message: {message} <br />
          Workspace: {workspace}
          
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
