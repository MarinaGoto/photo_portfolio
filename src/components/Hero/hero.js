import React, { Component } from 'react';
import styles from './hero.module.scss';
import img_1 from "../../images/performance/1.jpg";
import img_2 from "../../images/performance/2.jpg";
import img_3 from "../../images/performance/3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'
import Header from '../Header/header';

const SliderWrap = styled.div`
    .slick-dots {
       display: flex;
       justify-content: center;
    }
    .slick-dots li {
       width: 10vw;
       margin: 0;
    }
`

const images = [
  {image: img_1},
  {image: img_2},
  {image: img_3},
];


class Hero extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <div
              style={{backgroundImage: `url("${images[i].image}")`}}
              className={styles.paddingImg}
            />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Header/>
        <SliderWrap>
        <Slider {...settings}>
          {images.map((el, index) => (
            <div key={index}>
              <div
                key={index}
                style={{backgroundImage: `url("${el.image}")`}}
                className={styles.image}
                title={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
        </SliderWrap>
      </div>
    );
  }
}
  /*const [activeSlider, setActiveSlider] = useState(0);


  const nextSlider = () => {
    const nextId = activeSlider === images.length - 1 ? 0 : activeSlider + 1;
    setActiveSlider(nextId);
  };

  useEffect(() => {},[activeSlider]);

  return (
    <>
    <Header/>
    <div className={styles.slider}>
      <button className={styles.next} onClick={nextSlider} />
      {images.map((el, index) => (
        (index === activeSlider) &&
        <div
          key={index}
          style={{backgroundImage: `url("${el.image}")`}}
          className={styles.image}
          title={`Slide ${index + 1}`}
        />
      ))}
      <div className={styles.bottom}>
        {images.map((el, index) => (
            <div
              key={index}
              style={{backgroundImage: `url("${el.image}")`}}
              className={`${styles.image} ${index === activeSlider ? styles.active : null}`}
              title={`Slide ${index + 1}`}
            />
        ))}
      </div>
    </div>
    </>
  )*/


export default Hero
