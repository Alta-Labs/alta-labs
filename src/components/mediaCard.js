import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';

import laproLogo from "../images/lapro-logo.png";


const styles = {
  card: {
    display: 'flex',
    height: '200px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '200px',
  }
};

function MediaControlCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            SpruceJoy
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          SpruceJoy is a trusted marketplace for home owners to find, compare, and book local business service pros. 
          </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" target="_blank" href="https://www.sprucejoy.com">Learn More</Button>
        </CardActions>
      </div>
      <Hidden smDown>
        <CardMedia
            className={classes.cover}
            image={laproLogo}
            title="SpruceJoy logo"
        />
      </Hidden>
      
    </Card>
  );
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
