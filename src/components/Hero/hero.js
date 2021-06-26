import React from 'react';
import styles from './hero.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

const SliderWrap = styled.div`
    .slick-dots {
      display: flex !important;  
      justify-content: center;
     }
    .slick-dots li {
      width: 150px; 
      opacity: 0.5;
    }
    .slick-dots{
      .slick-active {
       opacity: 1;
    }}
    .slick-arrow {
      width: 100px;
      z-index: 99;
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
  const data = useStaticQuery(dataQuery);

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
      //autoplaySpeed: 2000,
      //autoplay: true,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    };

    return (
          <SliderWrap className={styles.sliderWrap}>
            <Slider {...settings}>
              {items.map((el, index) => (
                <div key={index}>
                  {el.image}
                </div>
              ))}
            </Slider>
          </SliderWrap>
    );
};


export default Hero
