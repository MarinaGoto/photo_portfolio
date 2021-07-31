import React from "react"

import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import SEO from "../components/seo"
import { useWindowWidth } from '@react-hook/window-size';

const IndexPage = () => {
  // const windowWidth = useWindowWidth();
  // const isOnSmallerDevice = windowWidth <= 768;

  return (
    <Layout>
      <SEO
        title="samira shaterian"
        description={"Samira is a photographer based in Oslo."}
      />
      <Hero/>
    </Layout>
  )
};

export default IndexPage
