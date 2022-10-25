import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import modeContext from "../modeContext";
import uniqid from "uniqid";
import { style } from "@mui/system";

function Navbar() {
  const color = useContext(modeContext);
  const path = useLocation().pathname;
  console.log(path);
  return (
    <div className={`${styles.Navbar} ${color ? styles.true : styles.false}`}>
      <div className={styles.menu}>
        <Link
          to="/home"
          className={` ${
            path.includes("/home") ? styles.active : styles.inactive
          } `}
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className={` ${
            path.includes("/wishlist") ? styles.active : styles.inactive
          } `}
        >
          Wishlist
        </Link>
        <Link
          to="/profile"
          className={` ${
            path.includes("/profile") ? styles.active : styles.inactive
          } `}
        >
          Profile
        </Link>
        <Link
          to="/post"
          className={` ${
            path.includes("/post") ? styles.active : styles.inactive
          } `}
        >
          Post
        </Link>
      </div>
      <div className="seperator"></div>
    </div>
  );
}
export default Navbar;
