import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import styles from "./index.module.scss"
import Img from "gatsby-image"

const query = graphql`
  query {
    fileName: file(relativePath: {eq: "samira.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, maxHeight: 200, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = ()  => {
  const data = useStaticQuery(query);
  return (
  <Layout>
    <SEO
      title="samira shaterian"
      description={"Samira is a photographer based in Oslo."}
    />
    <div className={styles.story}>
      <Img className={styles.content} fluid={data?.fileName?.childImageSharp.fluid} alt="" />
      <p className={styles.content}>
        Samira was born in 1985, in Tehran. She did her bachelor's at the "Art University" of Tehran. If her major was sculpture, she had a good chance to experiment with a wide range of materials to work with. As you may know, sculpturists work with their hands and it is vital to touch the material with fingers. It gives them the feeling of being the creator of the artwork.
      </p>
    </div>
  </Layout>
)};

export default About
