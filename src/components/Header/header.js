import { Link } from "gatsby"
import React, { useState } from 'react';
import styles from "./header.module.scss"

const menu = [
  {item: "performance"},
  {item: "portrait"},
  {item: "story"},
  {item: "contact"},
];


const Header = () => {
      const [clikedItem, setClickedItem] = useState(0);
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
            samira
          </Link>
        </h1>
        <div className={styles.menu}>
          {menu.map((el, index) => (
            <a onClick={() => setClickedItem(index)}>{el.item}</a>
          ))}
        </div>
   </header>    )

}


export default Header
