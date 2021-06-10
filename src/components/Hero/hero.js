import React, { Component } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import styles from './hero.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
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

const dataQuery = graphql`
  query imageData {
    allPerformanceImagesJson {
      edges {
        node {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2560, quality: 90) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;

const Hero = ()  => {
    const data = useStaticQuery(dataQuery);
    const windowWidth = useWindowWidth();
    const isOnSmallerDevice = windowWidth <= 768;
    const imageStyle = isOnSmallerDevice ? { height: '75vh' } : { maxHeight: '100vh' };

    const items = data.allPerformanceImagesJson.edges
      .filter(item => {
        return item;
      })
      .map(item => {
        const sources = [
          item.node.image.childImageSharp.fluid,
        ];
        return {
          name: item.node.title,
          image: (
            <Img
              style={imageStyle}
              loading='eager'
              fluid={sources}
            />
          ),
        };
      });

    const settings = {
      customPaging: function(i) {
        return (
          <div>
            {items[i].image}
          </div>
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
          {items.map((el, index) => (
            <div key={index}>
            {el.image}
            </div>
          ))}
        </Slider>
        </SliderWrap>
      </div>
    );
};


export default Hero
