import React from "react";
import {Carousel} from "react-bootstrap";
import Logo from '../../assets/logo/c1.jpg_1200x1200.jpg'
import Pic1 from '../../assets/logo/c2.jpg'
import Pic2 from '../../assets/logo/c3.jpg'



const Slider=()=> {
    return(
        <Carousel fade>
            <Carousel.Item >
                <img
                    height='350px'
                    className="d-block w-100"
                    src={Logo}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height='350px'
                    className="d-block w-100"
                    src={Pic1}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    height='350px'
                    className="d-block w-100"
                    src={Pic2}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}
export default Slider;
