import { Link } from "gatsby"
import React, { useState } from 'react';
import styles from "./header.module.scss"
import logo from "../../images/logo.svg";

const menu = [
  {item: "performance"},
  {item: "portrait"},
  {item: "story"},
  {item: "contact"},
];


const Header = () => {
      const [clickedItem, setClickedItem] = useState(0);
return (
   <header className={styles.header}>
        <h1 style={{ margin: 0 }}>
          <Link
            className={styles.link}
            to="/"
            style={{
              textDecoration: `none`,
            }}
          >
            <div
              style={{backgroundImage: `url("${logo}")`}}
              className={styles.logo}
              title={`Logo`}
            />
          </Link>
        </h1>
        <div className={styles.menu}>
          {menu.map((el, index) => (
            <a onClick={() => setClickedItem(index)}>{el.item}</a>
          ))}
        </div>
   </header>
)

}


export default Header
