import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "./grid/GridContainer.jsx";
import GridItem from "./grid/GridItem.jsx";
import Card from "./card/Card.jsx";
import carouselStyle from "../assets/jss/carouselStyle.jsx";
import image from "../assets/img/high_school1.jpg";
import image1 from "../assets/img/trip1.jpg";
import image2 from "../assets/img/trip2.jpg";
import image3 from "../assets/img/basketball.jpg";
import "../assets/css/react-slick.css";
// import "../assets/css/material-kit-react.css";

class SectionCarousel extends React.Component {
  render() {
    const {classes} = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (<div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img src={image} alt="Initial slide" className="slick-image" style={{
                      borderRadius: 6
                    }}/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons"/>Growing up, Junior high school dude
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" style={{
                      borderRadius: 6
                    }}/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons"/>Beautiful Scene, Baracay
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image2} alt="Second slide" className="slick-image" style={{
                      borderRadius: 6
                    }}/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons"/>Somewhere Beyond, Baracay
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" style={{
                      borderRadius: 6
                    }}/>
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons"/>Fu Jen Catholic University Court
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>);
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
