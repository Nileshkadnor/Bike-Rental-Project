import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
const myImage = require('../assets/images/slide1.jpg');
const myImage1 = require('../assets/images/slide1.jpg');
const myImage2 = require('../assets/images/slide1.jpg');
export default function Carosual() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        {/* <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' 
        alt='...' /> */}
        <img src={myImage} className='d-block w-100' alt="My Image" />
        <MDBCarouselCaption>
          <h5>Bike1</h5>
   
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        {/* <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100'
         alt='...' /> */}
         <img src={myImage2} className='d-block w-100' alt="My Image" />
        <MDBCarouselCaption>
          <h5>Bike2</h5>
        
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        {/* <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' 
        alt='...' /> */}
         <img src={myImage1} className='d-block w-100' alt="My Image" />
        <MDBCarouselCaption>
          <h5>Bike3</h5>
          
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}