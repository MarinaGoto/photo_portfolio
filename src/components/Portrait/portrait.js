import React from 'react';
import styles from './portrait.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Layout from '../Layout/layout';
import SEO from '../seo';

const SliderWrap = styled.div`
    .slick-dots {
      display: flex !important;  
      justify-content: center;
     }
    .slick-dots li {
      width: 150px; 
      opacity: 0.5;
      max-height: 100px;
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

const dataPortraitQuery = graphql`
  query portraitImageData {
    allPortraitImagesJson {
      edges {
        node {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 720, quality: 90, maxHeight: 1080) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;

const Portrait = ()  => {
  const dataPortrait = useStaticQuery(dataPortraitQuery);

  const items = dataPortrait.allPortraitImagesJson.edges
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
        <div>
          {items[i].image}
        </div>
      );
    },
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <Layout>
      <SEO
        title="samira shaterian"
        description={"Samira is a photographer based in Oslo."}
      />
      <SliderWrap className={styles.sliderWrap}>
        <Slider {...settings}>
          {items.map((el, index) => (
            <div key={index}>
              {el.image}
            </div>
          ))}
        </Slider>
      </SliderWrap>
    </Layout>

  );
};


export default Portrait
