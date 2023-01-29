import React from "react";
import styles from "./Viewers.module.css";
import img from "../assets/images/viewers-disney.png";
import img1 from "../assets/images/viewers-pixar.png";
import img2 from "../assets/images/viewers-marvel.png";
import img3 from "../assets/images/viewers-starwars.png";
import img4 from "../assets/images/viewers-national.png";
import video1 from "../assets/videos/1564674844-disney.mp4";
import video2 from "../assets/videos/1564676714-pixar.mp4";
import video3 from "../assets/videos/1564676115-marvel.mp4";
import video4 from "../assets//videos/1608229455-star-wars.mp4";
import video5 from "../assets/videos/1564676296-national-geographic.mp4";
const Viewers = (props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrap}>
        <img src={img} alt="/" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video1} type="video/mp4" />
        </video>
      </div>
      <div className={styles.Wrap}>
        <img src={img1} alt="/" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video2} type="video/mp4" />
        </video>
      </div>
      <div className={styles.Wrap}>
        <img src={img2} alt="/" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video3} type="video/mp4" />
        </video>
      </div>
      <div className={styles.Wrap}>
        <img src={img3} alt="/" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video4} type="video/mp4" />
        </video>
      </div>
      <div className={styles.Wrap}>
        <img src={img4} alt="/" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={video5} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Viewers;
