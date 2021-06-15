import React from "react"

import Layout from "../components/Layout/layout"
import Hero from "../components/Hero/hero"
import SEO from "../components/seo"
import styles from "./index.module.scss"

const Contact = () => (
  <Layout>
    <SEO
      title="samira shaterian"
      description={"Samira is a photographer based in Oslo."}
    />
    <div className={styles.contact}>
      <p>I’ll be glad to reply to your questions or comments. Just drop me a line:</p>
       <a href="mailto:samira.shaterian@gmail.com ">samira.shaterian@gmail.com</a>
    </div>
  </Layout>
);

export default Contact
