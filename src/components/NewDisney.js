import React from "react";
import { Link } from "react-router-dom";
import styles from "./Recommends.module.css";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../features/movie/movieSlice";
const NewDisney = (props) => {
  const movies = useSelector(selectNewDisney);
  return (
    <div className={styles.Container}>
      <h4>New to Disney</h4>
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

export default NewDisney;
