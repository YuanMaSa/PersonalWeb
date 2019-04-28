import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MyAvatar from './pic/MyAvatar';
import AlbumDisplay from './AlbumDisplay';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    fontFamily: 'Hanzipen TC',
    color: '#000000'
  },
  text: {
    padding: 50,
    fontFamily: 'Hanzipen SC',
    fontSize: 32
  }
});

function PaperSheet(props) {
  const {classes} = props;

  return (<div>
    <Paper className={classes.root} elevation={1} style={{
        backgroundColor: 'transparent'
      }}>
      <MyAvatar/>
      <Typography variant="display3" component="h3" className={classes.root}>
        Ma Yuan
      </Typography>
      <Typography component="p" className={classes.root}>
        相信溫柔的人會遇到溫柔的事
      </Typography>
    </Paper>
    <Paper className={classes.root} elevation={1} style={{
        backgroundColor: 'snow'
      }}>
      <Typography component="div" className={classes.text}>
        Hello world, my name is Ma Yuan</Typography>
      <Typography component="div" className={classes.text}>
        A Taiwanese who live in Taipei city</Typography>
      <img src={require('../assets/img/curr_pic.jpg')} height="408" width="306" alt="curr_pic"/>
      <img src={require('../assets/img/101.jpg')}  height="408" width="422" alt="101"/>
      <Typography component="div" className={classes.text}>
        Work as a developer in a tech company</Typography>
      <img src={require('../assets/img/hk_demo1.jpg')} height="360" width="271" alt="hk1"/>
      <img src={require('../assets/img/hk_demo2.jpg')} height="360" width="360" alt="hk2"/>
      <img src={require('../assets/img/hk_demo3.jpg')} height="360" width="360" alt="hk3"/>
      <Typography component="div" className={classes.text}>
        I love to build the connection with people and make a lot of friends
        <AlbumDisplay/>
      </Typography>
    </Paper>
  </div>);
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
