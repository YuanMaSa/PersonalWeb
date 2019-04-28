import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Appbar from './Appbar';
// import bg from '../assets/bg.jpg';
import '../assets/css/index.css';
import "../assets/css/material-kit-react.css";
import Display from './display';
const styles = theme => ({
  root: {
    // backgroundImage: `url(${bg})`,
    // backgroundSize: 'cover',
    // height: 800,
    // width: '100%'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
});

class homeDisplay extends React.Component {
  render() {
    const {classes} = this.props;

    return (<div className={classes.root}>
      <Appbar/>
      <Display/>
    </div>);
  }
}
homeDisplay.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(homeDisplay);
