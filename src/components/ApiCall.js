import React, {Component} from 'react';
import Cookies from 'js-cookie';

// import qs from '../../node_modules/qs';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Redirect} from 'react-router-dom';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Appbar from './Appbar.js';
import history from '../index.js';

// import axios from '../../node_modules/axios';
import URLSearchParams from 'url-search-params';
const api = '	https://api.spotify.com/v1/me/top/artists';

// const clientId = '6558412d51104411924f9e8a00d2d2f9';
// const clientSecret = '4103cae3adfa4bd1a12a343c04f3abd5';
// const token = 'BQBPYkd_bqVJsBIIE0ebFNvfu5sdQnpmjVIPiFclMKKeoj-i-QO406QeHEZxSqL-u6uDrNlI2O_VBz-gbmzhwCJf7TK3OKcWOMh6v4DVATCTpURztTYqxYhu5qLxQqeThEXxfHLbiZOAAlZGAMuI4GTz6AA0kXswLwXddXpbf4sn6_rG';
// const code = 'AQBj6JLP7NUdgjveVkpZ8Ls-hn5QBx_Ho7B-3tCNYDqW6VZIVLz_qj7lbuVN8vIkXyguuhFv3LUig8eaY_s_6OH_FQtjE-m5JEXpBYFfZLMvJjrslFxrvOaPgaXsIsH4qgpzuxQ_iH3FzyKEbl6YR0L4WOy7D8Lzde_pv5rjakhDrToTvqdkmxaUU4M1Xv5z5qaEVP3D-aZWBTrGKRrLugD3bws';
var new_params = '';

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
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});


class ApiCall extends Component {
  constructor() {
    super();

    console.log(Cookies.get("access_token"));
    if( Cookies.get("access_token") === null){
      return <Redirect to="/my_favs" />;
    }
    const latest_params = this.getHashParams();

    // feed_token = params.access_token
    new_params = latest_params.access_token;
    console.log(new_params);
    this.state = {
      auth_arr: '',
      token_arr: [],
      display_artist: [],
      push: false,
      redirectUrl: null,
    };
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  componentDidMount() {

    let urlParams = new URLSearchParams(this.props.location.search);
    console.log(urlParams);

    // fetch display images

    fetch(api, {
      method: 'get',
      headers: {
        'Authorization': 'Bearer ' + Cookies.get("access_token")
      }
    }).then(response => response.json()).then(res => this.setState({display_artist: res.items}));
  }
  componentDidUpdate(prevProps, prevState){
    const {redirectUrl} = this.state;
    if (!prevState.redirectUrl && redirectUrl) {
     this.setState({
       push: false,
       redirectUrl: null,
     });
   }
  }
  redirectTo = (redirectUrl, push = false) => {
    this.setState({
      push,
      redirectUrl,
    });
  }

  render() {
    const { classes } = this.props;
    const {display_artist} = this.state;

    setTimeout(function(){
      console.log("renew token redirect to my_favs");
      history.push("/my_favs");
    }, 3600000);
    // console.log(qs.parse(this.props.location.search));
    // console.log(auth_arr);
    // console.log(token_arr);
    console.log(display_artist);
    return (
      <div>
      <React.Fragment>
        <CssBaseline />
        <Appbar/>
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                Spotify Grid
              </Typography>
              <Typography variant="title" align="center" color="textSecondary" paragraph>
                All of my favorite artists
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={16} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      Main call to action
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            <Grid container spacing={40}>
              {display_artist.map(artist => (
                <Grid item key={artist.id} sm={6} md={4} lg={3}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={artist.images[0].url} // eslint-disable-line max-len
                      title={artist.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="headline" component="h2">
                        {artist.name}
                      </Typography>
                      <Typography>
                        {artist.genres.map((type,index) =>
                          <li key={index}>
                          {type}
                          </li>)
                        }
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="title" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subheading" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>

    </div>);
  }
}

ApiCall.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ApiCall);
