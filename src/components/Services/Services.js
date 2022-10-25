import styles from "./Services.module.css";
import pic1 from "./pic1.jpg";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import modeContext from "../modeContext";

function Services({ data }) {
  const color = useContext(modeContext);

  return (
    <div
      className={`${styles.serviceDiv} ${color ? styles.true : styles.false} `}
    >
      {data &&
        data.map((data) => (
          <Link to="/service">
            <div className={styles.service}>
              <div className={styles.imageSection}>
                <img className={styles.image} src={pic1} />
              </div>
              <div className={styles.description}>
                <div className={styles.header}>
                  <div className={styles.title}>{data.title}</div>
                </div>
                <div className={styles.separator}></div>

                <div className={styles.body}>
                  <div className={styles.subbody}>
                    <img
                      src={pic1}
                      alt=""
                      srcset=""
                      className={styles.userImage}
                    />
                    <div className={styles.userName}>{data.user.userName}</div>
                  </div>
                </div>
                <div className={styles.separator}></div>
                <div>Starting from {data.price}\-</div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Services;
