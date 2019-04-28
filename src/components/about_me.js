import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Appbar from './Appbar';
// import MyAvatar from './MyAvatar';
import CardIntro1 from './card/CardIntro1';
import CardIntro2 from './card/CardIntro2';
import CardIntro3 from './card/CardIntro3';
import CardIntro4 from './card/CardIntro4';
import PaperSheet from './PaperSheet';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Appbar/>
      <Grid container>

        <Grid item xs={12}>
          <PaperSheet />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardIntro1 />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardIntro2 />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardIntro3 />
        </Grid>
        <Grid item xs={6} sm={3}>
          <CardIntro4 />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
