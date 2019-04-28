import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  palette: {
    display: 'flex',
    flexGrow: 1,
  },
  button: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 20,
    padding: '6px 20px',
    // border: '1px solid',
    fontWeight: 700,
    margin: theme.spacing.unit * 4,
    color: '#888888',
    // marginLeft: 60,
    textDecoration: 'none',
    fontFamily: 'Hanzipen SC',
    '&:hover': {
      color: '#EE7700'
    },
    '&:focus': {
      out: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  studyItems :{
    fontSize: 20,
    padding: '6px 24px',
    color: '#888888',
    margin: 20,
    fontWeight: 700,
    textDecoration: 'none',
    fontFamily: 'Hanzipen SC',
    '&:hover': {
      color: '#EE7700'
    },
    '&:focus': {
      out: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  }
});

class MyAppBar extends React.Component {

  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {classes} = this.props;
    const { anchorEl } = this.state;

    return (<div className={classes.palette}>
      <AppBar position="static" style={{
          background: '#FFFFFF'
        }}>
        <Toolbar>
          <Button href="/home"><img src={require('../assets/img/icon2.svg')} alt="icon" height="36" width="114"/></Button>
          <Button href="/about_me" className={classes.button}>My profile</Button>
          <Button className={classes.button}
            aria-owns = {anchorEl ? 'simple-menu': null}
            aria-haspopup = "true"
            onClick = {this.handleClick}> Study items</Button>

          <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>

            <MenuItem onClick={this.handleClose} className={classes.studyItems} >
              <NavLink to="/MySkills" className={classes.studyItems}>My skills</NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose} className={classes.studyItems} >
              <NavLink to="/StudyTargets" className={classes.studyItems}>Study targets</NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose} className={classes.studyItems} >
              <NavLink to="/Projects" className={classes.studyItems}>Projects</NavLink>
            </MenuItem>
            <MenuItem onClick={this.handleClose} className={classes.studyItems} >
              <NavLink to="/Internship" className={classes.studyItems}>Internship</NavLink>
            </MenuItem>

          </Menu>
          <Button href="/my_favs" className={classes.button}>
            My favs
          </Button>
          <Button href="/follow_me" className={classes.button}>
            Follow me
          </Button>
        </Toolbar>
      </AppBar>
    </div>);
  }
}

MyAppBar.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyAppBar);
