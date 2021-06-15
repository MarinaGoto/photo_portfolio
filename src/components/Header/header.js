import { Link } from "gatsby"
import React from 'react';
import styles from "./header.module.scss"
import logo from "../../images/logo.png";
import { useWindowWidth } from '@react-hook/window-size';

const menu = [
  {item: "performance"},
  {item: "portrait"},
  {item: "story"},
  {item: "contact"},
];


const Header = () => {
  const windowWidth = useWindowWidth();
  const isOnSmallerDevice = windowWidth <= 768;

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
              <a href={`/${el.item}`}>{el.item}</a>
            ))}
          </div>
     </header>
  )
};


export default Header
