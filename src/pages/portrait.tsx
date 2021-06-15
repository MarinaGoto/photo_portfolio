import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from 'gatsby';
import { useWindowWidth } from '@react-hook/window-size';
import Img from 'gatsby-image';
import styles from "./index.module.scss"


const dataQuery = graphql`
  query portraitImageData {
    allPortraitImagesJson {
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


const Portrait = () => {
    const data = useStaticQuery(dataQuery);
    const windowWidth = useWindowWidth();
    const isOnSmallerDevice = windowWidth <= 768;
    const imageStyle = isOnSmallerDevice ? { height: '75vh' } : { maxHeight: '100vh' };

    const items = data.allPortraitImagesJson.edges
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
              loading='eager'
              fluid={sources}
            />
          ),
        };
      });
    return (
      <Layout>
        <SEO
          title="samira shaterian"
          description={"Samira is a photographer based in Oslo."}
        />
        {items.map((el, index) => (
          <div key={index} className={styles.portrait}>
            {el.image}
          </div>
        ))}
      </Layout>
    )
  }
;

export default Portrait
