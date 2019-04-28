import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 300,
    height: 300,
    margin: 10,
    marginLeft:20,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function MyAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="My pic" src={require('../../assets/img/mypic.jpg')} className={classes.avatar} />
    </div>
  );
}

MyAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyAvatars);
