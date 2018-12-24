import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import logo from "../images/alta-logo.png";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = {
  root: {
    flexGrow: 1,
  },
  app: {
    height:'60px',
    borderBottom: '#f5f3f7 1px solid',
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className={classes.app} position="static" color="inherit">
        <Toolbar variant="dense">
          <img src={logo} alt="Logo" height="40px" style={{ marginTop: '25px', }}/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);