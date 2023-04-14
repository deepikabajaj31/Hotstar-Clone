import React from "react";
import Slider from "react-slick";
import styles from "./ImgSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../assets/images/slider-badging.jpg";
import img1 from "../assets/images/slider-scale.jpg";
import img2 from "../assets/images/slider-badag.jpg";
import img3 from "../assets/images/slider-scales.jpg";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    sildesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: true,
  };
  return (
    <Slider className={styles.Carousel} {...settings}>
      <div className={styles.Wrap}>
        <a href="/home">
          <img src={img} alt=""></img>
        </a>
      </div>
      <div className={styles.Wrap}>
        <a href="/home">
          <img src={img1} alt="/" />
        </a>
      </div>
      <div className={styles.Wrap}>
        <a href="/home">
          <img src={img2} alt="/" />
        </a>
      </div>
      <div className={styles.Wrap}>
        <a href="/home">
          <img src={img3} alt="/" />
        </a>
      </div>
    </Slider>
  );
};

export default ImgSlider;
