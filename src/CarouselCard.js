import "./CarouselCard.css";
import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
//import uuidv4 from "uuid";
import { config } from "react-spring";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import Circle from "./Circle";

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //goToSlide: ""
      goToSlide: 0
    };
  }

  slides = [
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
          <div className="circle-div"
          id="circle-div"
          ></div>
            <CardTitle className="card-title" tag="h5">
              HEADLINE
            </CardTitle>
            <CardText className="card-text">
              I quickly put up some text ere to quickly populate this card to
              enable my attempts to replicate this design work. I hope you love
              it :)
            </CardText>
          </CardBody>
        </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
        <CardBody>
        <div className="circle-div"
        id="circle-div"
        ></div>
          <CardTitle className="card-title" tag="h5">
            HEADLINE
          </CardTitle>
          <CardText className="card-text">
            I quickly put up some text ere to quickly populate this card to
            enable my attempts to replicate this design work. I hope you love
            it :)
          </CardText>
        </CardBody>
      </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
          <CardBody>
          <div className="circle-div"
          id="circle-div"
          ></div>
            <CardTitle className="card-title" tag="h5">
              HEADLINE
            </CardTitle>
            <CardText className="card-text">
              I quickly put up some text ere to quickly populate this card to
              enable my attempts to replicate this design work. I hope you love
              it :)
            </CardText>
          </CardBody>
        </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
        <CardBody>
        <div className="circle-div"
        id="circle-div"
        ></div>
          <CardTitle className="card-title" tag="h5">
            HEADLINE
          </CardTitle>
          <CardText className="card-text">
            I quickly put up some text ere to quickly populate this card to
            enable my attempts to replicate this design work. I hope you love
            it :)
          </CardText>
        </CardBody>
      </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
        <CardBody>
        <div className="circle-div"
        id="circle-div"
        ></div>
          <CardTitle className="card-title" tag="h5">
            HEADLINE
          </CardTitle>
          <CardText className="card-text">
            I quickly put up some text ere to quickly populate this card to
            enable my attempts to replicate this design work. I hope you love
            it :)
          </CardText>
        </CardBody>
      </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
        <CardBody>
        <div className="circle-div"
        id="circle-div"
        ></div>
          <CardTitle className="card-title" tag="h5">
            HEADLINE
          </CardTitle>
          <CardText className="card-text">
            I quickly put up some text ere to quickly populate this card to
            enable my attempts to replicate this design work. I hope you love
            it :)
          </CardText>
        </CardBody>
      </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
        <CardBody>
        <div className="circle-div"
        id="circle-div"
        ></div>
          <CardTitle className="card-title" tag="h5">
            HEADLINE
          </CardTitle>
          <CardText className="card-text">
            I quickly put up some text ere to quickly populate this card to
            enable my attempts to replicate this design work. I hope you love
            it :)
          </CardText>
        </CardBody>
      </Card>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card className="card-main">
        <CardBody>
        <div className="circle-div"
        id="circle-div"
        ></div>
          <CardTitle className="card-title" tag="h5">
            HEADLINE
          </CardTitle>
          <CardText className="card-text">
            I quickly put up some text ere to quickly populate this card to
            enable my attempts to replicate this design work. I hope you love
            it :)
          </CardText>
        </CardBody>
      </Card>
      )
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  switchForward = () => {
    let newSlide =
      this.state.goToSlide === this.slides.length - 1
        ? 0
        : this.state.goToSlide + 1;
    this.setState({ goToSlide: newSlide });
  };

  switchBackward = () => {
    let newSlide =
      this.state.goToSlide === 0
        ? this.slides.length - 1
        : this.state.goToSlide - 1;
    this.setState({ goToSlide: newSlide });
  };

  render() {
    return (
      <div style={{ width: "40%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius="10"
          animationConfig={config.gentle}
          showNavigation
        />
        <button onClick={this.switchForward}>Fastforward</button>
        <button onClick={this.switchBackward}>back</button>
      </div>
    );
  }
}
export default MyCarousel;
