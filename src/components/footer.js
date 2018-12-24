import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  fstyle: {
    backgroundColor:'rgba(255,255,255,0.975)', 
    height:'60px',
    borderTop: '#f5f3f7 1px solid',
  },
  text1: {
    margin: '0 auto',
    maxWidth: '900px',
    textAlign: 'center',
    padding: '10px 0',
    color: '#a1a1a1'
  }
};

function Footer(props) {
  const { classes } = props;

  return (
    <footer className={classes.fstyle}
    >
      <div className={classes.text1}
      >
        &copy;Alta Labs, Inc
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);