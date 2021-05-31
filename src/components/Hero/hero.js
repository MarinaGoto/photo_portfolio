import React, { Component } from 'react';
import styles from './hero.module.scss';
import img_1 from "../../images/performance/1.jpg";
import img_2 from "../../images/performance/2.jpg";
import img_3 from "../../images/performance/3.jpg";
import img_4 from "../../images/performance/4.jpg";
import img_5 from "../../images/performance/5.jpg";
import img_6 from "../../images/performance/6.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Header from '../Header/header';

const SliderWrap = styled.div`
    .slick-dots {
       display: flex;
       justify-content: center;
       background-color: white;
       height: 10vh;      
    }
    .slick-dots li {
       min-width: 10vw;
       margin: 0;
       opacity: 0.5;
    }
    .slick-dots{
      .slick-active {
       opacity: 1;
    }}
    .slick-arrow {
      height 100vh;
      position: absolute;
      z-index: 99;
      bottom: 0;
      right: 20px;
      display: flex !important;
      justify-content: flex-end;
      flex-direction: column;  
     }  
`;

const images = [
  {image: img_1},
  {image: img_3},
  {image: img_5},
  {image: img_2},
  {image: img_6},
  {image: img_4},
  {image: img_1},
  {image: img_3},
  {image: img_5},
  {image: img_2},
];


class Hero extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <div
              style={{backgroundImage: `url("${images[i] && images[i].image}")`}}
              className={styles.paddingImg}
            />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className={styles.root}>
        <Header/>
        <SliderWrap>
        <Slider {...settings}>
          {images.map((el, index) => (
            <div key={index}>
              <div
                key={index}
                style={{backgroundImage: `url("${el.image}")`}}
                className={styles.image}
                title={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        </SliderWrap>
      </div>
    );
  }
}


export default Hero
