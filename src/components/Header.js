import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import img from "../assets/images/logo.svg";
import img1 from "../assets/images/home-icon.svg";
import img2 from "../assets/images/search-icon.svg";
import img3 from "../assets/images/watchlist-icon.svg";
import img4 from "../assets/images/original-icon.svg";
import img5 from "../assets/images/movie-icon.svg";
import img6 from "../assets/images/series-icon.svg";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
} from "../features/user/userSlice";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { setLoginUserDetails } from "../features/user/userSlice";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = (props) => {
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    setUser();
    navigate("/home");
  };
  const signOut = () => {
    auth.signOut();
    dispatch(setSignOutState());
    navigate("/");
  };
  const setUser = () => {
    dispatch(
      setLoginUserDetails({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photo: auth.currentUser.photoURL,
      })
    );
  };
  return (
    <nav className={styles.Nav}>
      <a className={styles.Logo} href="/">
        <img src={img} alt="" />
      </a>
      {!userName ? (
        <button onClick={signInWithGoogle} className={styles.Login}>
          LOGIN
        </button>
      ) : (
        <>
          <div className={styles.NavMenu}>
            <a href="/home">
              <img src={img1} alt="" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src={img2} alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a href="/home">
              <img src={img3} alt="WATCHLIST" />
              <span>WATCHLIST</span>
            </a>
            <a href="/home">
              <img src={img4} alt="ORIGINALS" />
              <span>ORIGINALS</span>
            </a>
            <a href="/home">
              <img src={img5} alt="MOVIES" />
              <span>MOVIES</span>
            </a>
            <a href="/home">
              <img src={img6} alt="SERIES" />
              <span>SERIES</span>
            </a>
          </div>
          <div className={styles.SignOut}>
            <img className={styles.userImg} src={userPhoto} alt={userName} />
            <div className={styles.DropDown}>
              <span onClick={signOut}>Sign Out</span>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
