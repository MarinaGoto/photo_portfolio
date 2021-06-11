import React, { Component, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import styles from './hero.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Header from '../Header/header';
import self from '../../images/samira.png';


const SliderWrap = styled.div`
    .slick-list {
       height: 100vh;
    }    
    .slick-dots {
       min-height: 70px;
       overflow-x: scroll;
       overflow-y: hidden;
       bottom: 0;
       display: flex !important;  
       justify-content: center;
    }
    .slick-dots li {
       width: 150px; 
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
              fluid(maxWidth: 1000, quality: 90) {
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
  const [clickedItem, setClickedItem] = useState("performance");
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
              imgStyle={{height: "100%"}}
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
          <div className={styles.paging}>
            {items[i].image}
          </div>
        );
      },
      dots: true,
      arrows: false,
      dotsClass: "slick-dots",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div className={styles.root}>
        <Header setClickedItem={setClickedItem}/>
        {clickedItem === "performance" &&
        <SliderWrap className={styles.sliderWrap}>
          <Slider {...settings}>
            {items.map((el, index) => (
              <div key={index}>
                {el.image}
              </div>
            ))}
          </Slider>
        </SliderWrap>
        }
        {clickedItem === "story" &&
        <div className={styles.wrapper}>
          <img className={styles.item} src={self}/>
          <p className={styles.item}>
            Samira was born in 1985, in Tehran. She did her bachelor's at the "Art University" of Tehran. If her major was sculpture, she had a good chance to experiment with a wide range of materials to work with. As you may know, sculpturists work with their hands and it is vital to touch the material with fingers. It gives them the feeling of being the creator of the artwork.
          </p>
        </div>
        }
        {clickedItem === "contact" &&
        <div className={styles.contact}>
          <p>
            <a href="mailto:samira.shaterian@gmail.com ">samira.shaterian@gmail.com</a>
          </p>
          <p>
            <a href="tel:+4799999919">+4799999919</a>
          </p>
          <p>Oslo, Norway</p>
        </div>
        }
      </div>
    );
};


export default Hero
