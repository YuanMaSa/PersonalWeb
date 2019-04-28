import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import '../../node_modules/react-vis/dist/style.css';
import Grid from '@material-ui/core/Grid';
import {GradientDefs, RadialChart} from 'react-vis';
import Appbar from './Appbar.js';
import Table from "../assets/jss/Table.jsx";
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 30,
    borderWidth: 1,
    borderRadius: 75,
  }
});

class Skills extends Component {

  render() {
    const {classes} = this.props;

    return (<div className={classes.root}>
      <Appbar/>
      {/* <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid> */}
      <Paper className={classes.paper}>
        <Typography variant="display2">Programming</Typography>
        <Table
          tableHeaderColor="primary"
          tableHead={['Language','Use for','framework experience','Proficiency']}
          tableData={[
              [ "Python" , "data processing & analysis" , "Flask" , "intermediate" ] ,
              [ "Java" , "system & web application" , "Spring MVC, Android, JSP" , "intermediate" ] ,
              [ "Html" , "web view" , "Html5" , "intermediate" ] ,
              [ "SQL" , "database query" , "MySQL" , "novice" ] ,
              [ "Javascript" , "web application" , "React, Node.js" , "basic" ] ,
              [ "PHP" , "back-end script" , "Laravel" , "basic" ]
          ]}
        /></Paper>

     <Paper className={classes.paper}>
        <Typography variant="display2">Tool & Platform</Typography>
        <Table
          tableHeaderColor="primary"
          tableHead={['Skill','Category','Experienced field','Proficiency']}
          tableData={[
              [ "AWS" , "cloud" , "data solution, serverless" , "advanced" ] ,
              [ "Linux" , "operating systems" , "shell script, cronjob scheduling" , "intermediate" ] ,
              [ "Git" , "version control system" , "git command" , "intermediate" ] ,
              [ "Jupyter notebook" , "web-based interactive computational environment" , "data processing, visualize" , "intermediate" ] ,
              [ "OpenCV" , "computer vision tool" , "image proceesing, color detection" , "basic" ] ,
              [ "Spark" , "cluster-computing framework" , "spark RDD, pyspark" , "basic" ]
          ]}
        />
      </Paper>

      <Paper className={classes.paper}>
        <Typography variant="display2">Certification</Typography>
        <Table
          tableHeaderColor="primary"
          tableHead={['Date','Category','Name','Issues']}
          tableData={[
              [ "2018 / 01" , "Cloud" , "AWS Certified Solutions Architect – Associate" , "https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-01-25&ci=AWS00382040" ] ,
              [ "2017 / 11" , "English" , "TOEIC" , "800 points" ]
          ]}
        /></Paper>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="display1">Skills using recently</Typography>
              <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{
                  top: 100
                }} getColor={d => `url(#${d.gradientLabel})`} data={[
                  {
                    angle: 2,
                    gradientLabel: 'grad1',
                    label: 'ETL'
                  }, {
                    angle: 2,
                    gradientLabel: 'grad2',
                    label: 'Data Processing'
                  }, {
                    angle: 5,
                    gradientLabel: 'grad3',
                    label: 'AWS solution development'
                  }, {
                    angle: 1,
                    gradientLabel: 'grad4',
                    label: 'Automation Job'
                  }, {
                    angle: 1,
                    gradientLabel: 'grad5',
                    label: 'Spark'
                  }
                ]} labelsRadiusMultiplier={1.1} labelsStyle={{
                  fontSize: 16,
                  fill: '#222'
                }} showLabels
                   style={{
                  stroke: '#fff',
                  strokeWidth: 2
                }} width={600} height={450}>
                <GradientDefs>
                  <linearGradient id="grad1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#003973" stopOpacity={0.6}/>
                    <stop offset="100%" stopColor="#e5e5be" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="grad2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#cbb4d4" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#20002c" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="grad3" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#833ab4" stopOpacity={0.4}/>
                    <stop offset="40%" stopColor="#fd1d1d" stopOpacity={0.3}/>
                    <stop offset="60%" stopColor="#fcb045" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="grad4" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C33764" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#1D2671" stopOpacity={0.9}/>
                  </linearGradient>
                  <linearGradient id="grad5" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#000428" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#004e92" stopOpacity={0.9}/>
                  </linearGradient>
                </GradientDefs>
              </RadialChart>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Typography variant="display1">Major Skills Set</Typography>
              <RadialChart colorType={'literal'} colorDomain={[0, 100]} colorRange={[0, 10]} margin={{
                  top: 100
                }} getColor={d => `url(#${d.gradientLabel})`} data={[
                  {
                    angle: 1,
                    gradientLabel: 'pie1',
                    label: 'Data Analysis'
                  }, {
                    angle: 2,
                    gradientLabel: 'pie2',
                    label: 'Solution Architect'
                  }, {
                    angle: 5,
                    gradientLabel: 'pie3',
                    label: 'Cloud Development'
                  }
                ]} labelsRadiusMultiplier={1.1} labelsStyle={{
                  fontSize: 16,
                  fill: '#222'
                }} showLabels
                   style={{
                  stroke: '#fff',
                  strokeWidth: 2
                }} width={600} height={450}>
                <GradientDefs>
                  <linearGradient id="pie1" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#12c2e9" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#c471ed" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="pie2" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#B993D6" stopOpacity={0.4}/>
                    <stop offset="100%" stopColor="#8CA6DB" stopOpacity={0.3}/>
                  </linearGradient>
                  <linearGradient id="pie3" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#C6FFDD" stopOpacity={0.4}/>
                    <stop offset="0%" stopColor="#FBD786" stopOpacity={0.3}/>
                    <stop offset="100%" stopColor="#f7797d" stopOpacity={0.3}/>
                  </linearGradient>
                </GradientDefs>
              </RadialChart>
            </Paper>
          </Grid>
        </Grid>

    </div>);
  }
}
Skills.defaultProps = {
    tableHeaderColor: 'gray'
}
Skills.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf(['warning','primary','danger','success','info','rose','gray']),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(styles)(Skills);
