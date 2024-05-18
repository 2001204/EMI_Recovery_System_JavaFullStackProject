/* Slider.jsx */

import React from "react";
import Image1 from "./images/Image1.jpg"
import Image2 from "./images/Image2.jpg"
import Image3 from "./images/Image3.jpg"
import Carousel from 'react-bootstrap/Carousel';
import "../CSS_Component/Slider.css"
import { Container, Row, Col } from 'react-bootstrap';

function Slider() {
  return (
    <Carousel className="Slider">
      <Carousel.Item className="slide">
        <img
          
          style={{ height: "55vh"}}
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption style={{ left: '5%', right: 'unset', color: 'black' }} className="Slide">
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'black', fontWeight: 'bold' }} >Emi Recovery Agency</h3>
            <p style={{ color: 'black' }} >
              With the easier process for loan sanctions, consumers are taking loans for their personal and professional works
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          style={{ height: "55vh" }}
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />
        <Carousel.Caption style={{ left: '5%', right: 'unset', color: 'black' }}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'black', fontWeight: 'bold' }} >Emi Recovery Agency</h3>
            <p style={{ color: 'black' }} >
              The loan recovery agent, are those who work for banks to recover the due debts from clients and organizations who owe them.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="slide">
        <img
          style={{ height: "55vh" }}
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption style={{ left: '5%', right: 'unset', color: 'black' }}>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ color: 'black', fontWeight: 'bold' }}>Emi Recovery Agency</h3>
            <p style={{ color: 'black' }}>
              The agents are generally third parties who are not a part of the main deal. In some cases, the recovery agent can also be one of the parties directly involved in the deal, but majorly they are the third parties.
            </p>
          </div>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;