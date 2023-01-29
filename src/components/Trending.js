import React from "react";
import { Link } from "react-router-dom";
import styles from "./Recommends.module.css";
import { useSelector } from "react-redux";
import { selectTrending } from "../features/movie/movieSlice";
const Trending = (props) => {
  const movies = useSelector(selectTrending);
  return (
    <div className={styles.Container}>
      <h4>Trending</h4>
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

export default Trending;
