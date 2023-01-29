import React from "react";
import { Link } from "react-router-dom";
import styles from "./Recommends.module.css";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";
const Recommends = (props) => {
  const movies = useSelector(selectRecommend);
  return (
    <div className={styles.Container}>
      <h4>Recommend for you</h4>
      <div className={styles.Content}>
        {movies &&
          movies.map((movie, key) => (
            <div className={styles.Wrap} key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recommends;
