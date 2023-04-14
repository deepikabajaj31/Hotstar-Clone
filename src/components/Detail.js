import React from "react";
import styles from "./Detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import img from "../assets/images/play-icon-black.png";
import img1 from "../assets/images/play-icon-white.png";
import img2 from "../assets/images/group-icon.png";
import { displayData } from "../Lib/api";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Detail = (props) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [hoja, setHoja] = useState(false);
  console.log(user);

  if (!user) {
    navigate("/");
  }
  useEffect(() => {
    const getData = async () => {
      const movieData = await displayData(id);
      setDetailData(movieData[0]);
      setHoja(true);
    };
    getData();
  }, [id]);
  return (
    <div className={styles.Container}>
      <div className={styles.Background}>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </div>
      <div className={styles.ImageTitle}>
        <img alt={detailData.title} src={detailData.titleImg} />
      </div>
      <div className={styles.ContentMeta}>
        <div className={styles.Controls}>
          <button
            className={styles.Player}
            type="button"
            onClick={() => navigate(`/detail/${id}/video`)}
          >
            <img src={img} alt="" />
            <span>Play</span>
          </button>
          <button
            className={`${styles.Player} ${styles.Trailer}`}
            onClick={() => navigate(`/detail/${id}/video`)}
            type="button"
          >
            <img src={img1} alt="" />
            <span>Trailer</span>
          </button>
          <div className={styles.AddList}>
            <span />
            <span />
          </div>
          <div className={styles.GroupWatch}>
            <div>
              <img src={img2} alt="/" />
            </div>
          </div>
        </div>
        <div className={styles.SubTitle}>{detailData.subTitle}</div>
        <div className={styles.Description}>{detailData.description}</div>
      </div>
    </div>
  );
};

export default Detail;
