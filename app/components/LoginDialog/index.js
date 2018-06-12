import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class LoginDialog extends React.Component {
  state = {
    open: false,
    loggedIn: !!this._getCookie('sessionid'),
  };

  _getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length == 2) return parts.pop().split(';').shift();
  }

  open = () => {
    this.setState({ open: true });
  };

  close = () => {
    this.setState({ open: false });
  };

  login = () => {
    this.setState({ open: true });
  }

  logout = () => {
    document.cookie = 'sessionid=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    this.setState({ loggedIn: !!this._getCookie('sessionid') });
  }

  render() {
    return (
      <div>
        {!this.state.loggedIn ? <Button color="inherit" onClick={this.login}>Login</Button> : <Button color="inherit" onClick={this.logout}>Logout</Button> }
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
        To subscribe to this website, please enter your email address here. We will send
      updates occasionally.
      </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
      Cancel
      </Button>
            <Button onClick={this.handleClose} color="primary">
      Subscribe
      </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
