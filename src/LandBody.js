import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';

export default class LandBody extends Component {
    render() {
        return (
            <div>

                <div className="carousel">
                <Carousel>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://p1.pxfuel.com/preview/557/646/384/read-education-books-book.jpg" height="660" width="1900"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="ps">"THAT'S THE THING ABOUT BOOKS.THEY LET YOU TRAVEL WITHOUT MOVING YOUR FEET"</h3>
      <p className="ps">--Jhumpa Lahiri--</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://i.pinimg.com/originals/eb/1b/62/eb1b62b29bbae285de237ee499531755.png" height="660" width="2000"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block "
      src="https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/2f325be9-776a-466d-9e8c-04727204c52b/best-crime-thriller-books-2021-header.jpg" height="660" width="2000"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Sell,Buy with 100% trust </h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                </div>
                
   

            </div>
        )
    }
}
