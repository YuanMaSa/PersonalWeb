import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import Appbar from './Appbar';
import FavItems from './pic/FavItems.js';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import bg2 from '../assets/img/bg2.jpg';
const styles = {
  card: {
    display: 'flex',
  },
  bg: {
    backgroundImage: `url(${bg2})`,
    background: 'no-repeat center center fixed',
    backgroundSize: 'cover'
  }
};

function FavList(props) {
  const { classes } = props;

  return (
    <div className={classes.bg}>
      <Appbar/>
      <FavItems/>
    </div>
  );
}

FavList.propTypes = {
  classes: PropTypes.object.isRequired,
  // theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavList);
