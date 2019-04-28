import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    margin: 10,
    // marginLeft:20,
  },
  bigAvatar: {
    width: 150,
    height: 150,
  },
  display1: {
    padding: 20,
  },
  display2:{
    verticalAlign: 'top',
    textAlign: 'center',
    // backgroundColor: '#FFFFFF'
  },
  text: {
    textTransform: 'none',
    fontFamily: 'Hanzipen SC',
    fontWeight: 700,
    fontSize: 20,
    color: '#FFFFFF',
    '&:hover': {
      // color: '#EE7700',
      // color: '#FF77FF'
      // color: '#000000'
    },
    '&:focus': {
      out: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  }
};

function FavItems(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      {/* <Avatar alt="nana" src={require('../../assets/img/nana.jpg')} className={classes.avatar} /> */}

      <Grid container>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="nana" src={require('../../assets/img/nana.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Actress</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="tmac" src={require('../../assets/img/lb_tmac.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Player</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="kygo" src={require('../../assets/img/kygo1.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Artist</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="http://localhost:8888/login">
            <figure className={classes.display2}>
              <Avatar alt="jay" src={require('../../assets/img/jay.png')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Singer</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="jobs" src={require('../../assets/img/jobs.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Doper</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="taylor" src={require('../../assets/img/taylor.png')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Writer</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="basketball" src={require('../../assets/img/bkb.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Sport</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="seo" src={require('../../assets/img/seo.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Film</Typography>
            </figure>
          </Button>
        </Grid>
        <Grid item xs={8} sm={4} className={classes.display1}>
          <Button href="home">
            <figure className={classes.display2}>
              <Avatar alt="hyuna" src={require('../../assets/img/hyuna.jpg')} className={classNames(classes.avatar, classes.bigAvatar)}/>
              <Typography className={classes.text}>Music</Typography>
            </figure>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

FavItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavItems);
