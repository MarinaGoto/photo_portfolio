import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import self from '../images/samira.png';
import styles from "./index.module.scss"


const Story = () => (
  <Layout>
    <SEO
      title="samira shaterian"
      description={"Samira is a photographer based in Oslo."}
    />
    <div className={styles.story}>
      <img alt={"Samira photo"} className={styles.item} src={self}/>
      <p className={styles.item}>
        Samira was born in 1985, in Tehran. She did her bachelor's at the "Art University" of Tehran. If her major was sculpture, she had a good chance to experiment with a wide range of materials to work with. As you may know, sculpturists work with their hands and it is vital to touch the material with fingers. It gives them the feeling of being the creator of the artwork.
      </p>
    </div>
  </Layout>
);

export default Story
