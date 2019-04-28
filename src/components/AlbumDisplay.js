import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import AppBar from '@material-ui/core/AppBar';
// import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// pic below
import high_school1 from '../assets/img/high_school1.jpg';
import high_school2 from '../assets/img/high_school2.jpg';
import high_school3 from '../assets/img/high_school3.jpg';
import grad from '../assets/img/grad.jpg';
import trip1 from '../assets/img/trip1.jpg';
import trip2 from '../assets/img/trip2.jpg';
import sunlight from '../assets/img/sunlight.jpg';
import proj_team from '../assets/img/proj_team.jpg';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    fontFamily: 'Hanzipen SC'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  text: {
    fontFamily: 'Hanzipen SC'
  }
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8];
const img = ["",high_school1,high_school2,high_school3,grad,trip1,trip2,sunlight,proj_team]
const heading = ["","國中小家人","高中混蛋們","FJMY","大鼻團","畢旅swag","長灘島海裡","長灘島夕陽","專題組員"]
const des = ["","My friends in junior high school, look at their young faces","Chill friends in high school, we always drink a lot together","High school dudes, all the best shit talkers in the world","My college friends, we got lots of precious memories","Graduation trip with college friends, what a swag","Gorgeous scene in Baracay, wanna be there again","Beautiful sunset in Baracay, love that relaxed atmosphere","Graduation project team with my professor"]

function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      {/* <CssBaseline /> */}

      <main>
        {/* Hero unit */}

        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card>
                  <CardMedia
                    className={classes.cardMedia}
                    image={img[card]}
                    title="Image title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2" className={classes.text}>
                      {heading[card]}
                    </Typography>
                    <Typography style={{color:'#888888'}}>
                      {des[card]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom className={classes.text}>
          ...未完待續
        </Typography>
        <Typography variant="subheading" align="center" color="textSecondary" component="p">
          continue to meet new friends
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
