import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Appbar from './Appbar.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: 30,
    fontFamily: 'Hanzipen SC',
    color: '#000000'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: 1,
    borderWidth: 1,
    borderRadius: 75,
    margin: 30,
    fontSize: 30,
    fontFamily: 'Hanzipen SC',
    // backgroundColor:'transparent'
  },
  title: {
    padding: theme.spacing.unit * 10,
    fontSize: 30,
    FontWeight: 700,
    fontFamily: 'Hanzipen SC',
    // color: '#000000'
  },
  text: {
    padding: theme.spacing.unit * 4,
    textAlign: 'left',
    fontSize: 20,
    fontFamily: 'Hanzipen SC',
  },
  font: {
    fontSize: 20,
    // color: '#00BBFF',
    textAlign: 'left',
  }
});


class Internship extends Component{
  render(){
    const {classes} = this.props;
    return(
      <div className={classes.root}>
        <Appbar/>
        <Paper className={classes.paper}>
          <img src={require('../assets/img/ecloud.png')} height="143" width="187" alt="ecloud"/>
          <Typography variant="display1" className={classes.root}>Internship Journey in eCloudvalley</Typography>
          <Typography variant="display1" className={classes.text}>
            eCloudvalley is a fast-growing company, starting AWS business at the beginning of 2014 and obtained the status of AWS Managed Service Partner in 2016
            eCloudvalley has been 100% dedicated to cloud.
            eCloudvalley currently holds 190+ AWS certifications and has served more than 500 customers.
          </Typography>
        </Paper>
        <Paper className={classes.paper}>
          <div className={classes.font}>
          <Typography variant="display1" className={classes.text}>
            Because of the certification, I had a chance to work in ECV
          </Typography>
          <img src={require('../assets/img/intern1.png')} height="323" width="742" alt="intern1"/>
          {/* <Typography variant="display1" className={classes.text}>
            Three components in ECV : Young blood, Relaxed atmosphere, friendly place
          </Typography>
          <img src={require('../assets/img/connection.png')} height="64" width="64" alt="connection"/>
          <ul className={classes.font}>
            <li>We enjoy working in the place where the atmosphere is not serious</li>
            <li>We are willing to help each other to complete the task</li>
            <li>We are passionate about the job</li>
          </ul> */}
          <Typography variant="display1" className={classes.text}>
            Many activities
          </Typography>
          <img src={require('../assets/img/hk_demo2.jpg')} height="480" width="480" alt="hk2"/>
          <img src={require('../assets/img/activity2.png')} height="480" width="640" alt="activity2"/>
          <ul className={classes.font}>
            <li>Bootcamps</li>
            <Typography variant="display1" className={classes.text}>
              With the bootcamp session, I learned more and more
            </Typography>
            <li>Workshops</li>
            <Typography variant="display1" className={classes.text}>
              I participated in many workshops to know more about client
            </Typography>
            <li>Hackathon</li>
            <Typography variant="display1" className={classes.text}>
              I won a prize in hackathon
            </Typography>
          </ul>
          <Typography variant="display1" className={classes.text}>
            My mentor  - Joe
          </Typography>
          <img src={require('../assets/img/mentor.png')} height="405" width="541" alt="mentor"/>
          <img src={require('../assets/img/motto.png')} style={{margin:50}}height="190" width="359" alt="motto"/>
          <Typography variant="display1" className={classes.text}>
            Joe is a great mentor who always encourages me in everything
          </Typography>
        </div>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="display3">Design Labs</Typography>
          <Typography variant="display1" className={classes.title}>Serverless-ETL-and-data-analysis-on-AWS</Typography>
          <img src={require('../assets/img/lab_architecture1.png')} height="400" width="1332" alt="lab1"/>
          <Typography variant="display1" className={classes.title}>Credit-card-fraud-detection-with-SageMaker-using-TensorFlow-estimators</Typography>
          <img src={require('../assets/img/lab_architecture2.png')} height="508" width="859" alt="lab2"/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant="display3">Design Demos</Typography>
          <Typography variant="display1" className={classes.title}><Button href="https://github.com/ecloudvalley/Credit-card-fraud-detection-with-SageMaker-using-TensorFlow-estimators"><img src={require('../assets/img/GitHub-Mark-120px-plus.png')} height="30" width="30" alt="github"/></Button>Fraud Detection Demo</Typography>
          <img src={require('../assets/img/demo1.png')}  height="636" width="1020" alt="demo1"/>
          <Typography variant="display1" className={classes.title}><Button href="https://github.com/YuanMaSa/Code-with-AWS/tree/master/javascript%20web/RekognitionWeb"><img src={require('../assets/img/GitHub-Mark-120px-plus.png')} height="30" width="30" alt="github"/></Button>Face Recognition Demo</Typography>
          <img src={require('../assets/img/demo2.png')}  height="694" width="1280" alt="demo2"/>
        </Paper>
      </div>);
  }
}

Internship.propTypes = {
    classes: PropTypes.object.isRequired
  };
export default withStyles(styles)(Internship);
