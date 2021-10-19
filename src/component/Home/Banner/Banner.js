import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://image.freepik.com/free-vector/hospital-building-exterior-modern-clinic-view_43633-7220.jpg"
          alt="Visit Us"
        />
        <Carousel.Caption >
          <h2 className="text-danger">Stay Safe Stay Good</h2>
          <h3 className="text-danger">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg"
          alt="Visit Us"
        />

        <Carousel.Caption>
          <h2 className="text-danger">Your Health Our Care</h2>
          <h3 className="text-danger"> Dpsum dolor sit amet, consectetur adipiscing elit.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '85vh' }}
          className="d-block w-100"
          src="https://image.freepik.com/free-photo/stethoscope-business-card-with-blue-background_23-2147652352.jpg"
          alt="Visit Us"
        />

        <Carousel.Caption>
          <h2 className="text-danger">No Musk No Service</h2>
          <h3 className="text-danger">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
