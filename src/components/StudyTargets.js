import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Appbar from './Appbar.js';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
  XYPlot,
  XAxis,
  YAxis,
  MarkSeries,
  LabelSeries,
  DiscreteColorLegend,
  VerticalGridLines,
  HorizontalGridLines,
  HorizontalBarSeries,
  HorizontalBarSeriesCanvas
} from 'react-vis';

import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin: 30,
    borderWidth: 1,
    borderRadius: 75,
  },
  plot: {
    padding: theme.spacing.unit * 2,
    margin: 50
  }
})



class StudyTargets extends Component {
  canvas_state = {
    useCanvas: false
  }
  state = {
    data: [
      {
        x: 18,
        y: 17,
        label: 'React',
        size: 80,
        style: {
          fontSize: 20
        },
        rotation: 45
      }, {
        x: 2,
        y: 4,
        label: 'Spark',
        size: 40
      }, {
        x: 12,
        y: 20,
        label: 'Recommender system',
        size: 40
      }, {
        x: 14,
        y: 12,
        label: 'TensorFlow',
        size: 40,
        rotation: 45
      }, {
        x: 1,
        y: 14,
        label: 'Node.js',
        size: 40
      }
    ]
  }
  render() {
    const {classes} = this.props;
    const {data} = this.state;
    const {useCanvas} = this.canvas_state;
    const BarSeries = useCanvas ? HorizontalBarSeriesCanvas : HorizontalBarSeries;
    return (<div>
      <Appbar/>
      <Paper className={classes.paper}>
        <Typography variant="display2" className={classes.plot}>Recent Study Targets</Typography>
        <Grid container>

          <Grid item xs={12} sm={6}>

            <XYPlot yDomain={[0, 22]} xDomain={[0, 22]} width={500} height={500}>
              <XAxis/>
              <YAxis/>
              <MarkSeries color ="#cbb4d4" className="mark-series-example" strokeWidth={2} sizeRange={[20, 80]} data={data}/>
              <LabelSeries animation allowOffsetToBeReversed data={data}/>
            </XYPlot>

          </Grid>
          <Grid item xs={12} sm={6}>
            <XYPlot
              yType="ordinal"
              width={500}
              height={500}
              stackBy="x">
              <VerticalGridLines />

              <HorizontalGridLines />
              <XAxis />
              <YAxis />

              <BarSeries
                data={[
                  {y: 'Web', x: 39},
                  {y: 'AI', x: 25},
                  {y: 'ETL', x: 48}
                ]}
              />
              <BarSeries
                data={[
                  {y: 'Web', x: 61},
                  {y: 'AI', x: 55},
                  {y: 'ETL', x: 22}
                ]}
              />

            </XYPlot>
            <DiscreteColorLegend
            style={{position: 'absolute', left: '40px', top: '0px'}}
            orientation="horizontal" items={[
              {
                title: 'Done (%)',
                color: '#12939A'
              },
              {
                title: 'In Progress (%)',
                color: '#79C7E3'
              }
            ]}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>);
  }
}
StudyTargets.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(StudyTargets);
