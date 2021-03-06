import React, { Component } from 'react';
import { Carousel, Image } from 'react-bootstrap';

export default class CardImage extends Component {
  render() {
    let hasMoreImages = this.props.images.length > 1;
    let images = this.props.images;
    console.log(typeof (this.props.images))

    return (
      <Carousel
        indicators={false}
        controls={hasMoreImages}
        fade={true}
        interval={null} >
        {
          images.map((image, i) =>
            <Carousel.Item key={"Item-" + i}>
              <Image
                className="d-block w-100"
                fluid
                src={image}
                alt={"Image-" + i}
                style={{
                  flex: 1,
                  resizeMode: 'contain'
                }} />
            </Carousel.Item>)
        }
      </Carousel>
    );
  }
}