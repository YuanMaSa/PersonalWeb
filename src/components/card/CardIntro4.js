import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  font:{
    fontSize:20,
    color:'#00AAAA'
  }
};

function CardIntro4(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../../assets/img/nana.jpg')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Dream to be ...
          </Typography>

            <ul style={styles.font}>
              <li>Full-Stack Developer</li>
              <li>Data Scientist</li>
              <li>Software Engineer</li>
            </ul>

        </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
      </Card>
    </div>
  );
}

CardIntro4.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardIntro4);
