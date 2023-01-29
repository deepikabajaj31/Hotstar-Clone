import React from "react";
import styles from "./Home.module.css";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import {
  trendingData,
  recommendData,
  originalData,
  newDisneyData,
} from "../Lib/api";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [hoja, setHoja] = useState(false);
  const dispatch = useDispatch();
  const [isTrending, setIsTrending] = useState([]);
  const [isRecommend, setIsRecommend] = useState([]);
  const [isOriginal, setIsOriginal] = useState([]);
  const [isNewDisney, setIsNewDisney] = useState([]);
  if (!user) {
    navigate("/");
  }
  useEffect(() => {
    const fillData = async () => {
      const trending = await trendingData(isTrending);
      const recommending = await recommendData(isRecommend);
      const originalList = await originalData(isOriginal);
      const newDisneyList = await newDisneyData(isNewDisney);
      setIsTrending(trending);
      setIsRecommend(recommending);
      setIsOriginal(originalList);
      setIsNewDisney(newDisneyList);
      setHoja(true);
      dispatch(
        setMovies({
          recommend: isRecommend,
          trending: isTrending,
          original: isOriginal,
          newDisney: isNewDisney,
        })
      );
    };
    fillData();
  }, [isTrending, isRecommend, isOriginal, isNewDisney, dispatch]);
  return (
    <main className={styles.Container}>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </main>
  );
};

export default Home;
