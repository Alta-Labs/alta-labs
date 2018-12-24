import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import heroImage from "../images/alta-hero.jpg";

import Button from '@material-ui/core/Button';

// const MyLink = props => <Link to="/open-collective" {...props} />
const styles = {
  himage: {
    background: 'no-repeat url('+heroImage+')',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'center',
  },
  htitle: {
    color: 'rgba(255,255,255, .95)',
    paddingTop: '160px',
    paddingBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  subtitle: {
    paddingTop:'20px',
    paddingBottom: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'rgba(255,255,255, .95)',
  }
};

function Hero(props) {
  const { classes } = props;

  return (
    <div className={classes.himage}>
          <h1 className={classes.htitle}>Business Marketplace, Reimaged</h1>
          <div className={classes.subtitle}>Alta Labs is building the world’s most trusted and transparent business marketplace. We make it easy to find great services from top-rated pros and provide the guidance companies need to make a more informed purchase.</div>

          <Button variant="raised" color="secondary" style={{borderRadius: '25px',}} target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd6qEkDMKDWXEVA4eg92UPTuuJv65BFFpCa2Sw7CVR8bzX5iQ/viewform">
            Contact us
          </Button>
      </div>
  );
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Hero);