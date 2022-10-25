import styles from "./Description.module.css";
import img1 from "./t1.jpg";
import modeContext from "../modeContext";
import { useContext, useEffect, useState } from "react";

function Description() {
  const color = useContext(modeContext);

  return (
    <div
      className={`${styles.descriptionDiv} ${
        color ? styles.true : styles.false
      }`}
    >
      <div className="title">
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos,
          eveniet.
        </h1>
      </div>

      <div className="imageSection">
        <img src={img1} alt="" className={styles.image} />
      </div>
      <div className={styles.hire}>
        {/* <p>Hire</p> */}
        {/* <div>Hire</div> */}
        <div className={styles.price}>Starting from 1000/-</div>
        <div>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className="description">
        <h3>Description</h3>
        Lorem ipsum dolor sit amen consectetur adipisicing elit. Quod
        perferendis voluptatem enim quae aspernatur quasi. Saepe veniam id sunt
        delectus alias soluta nulla temporibus architecto perferendis vitae
        possimus, tempore maiores ex nostrum magni asperiores iure! Aperiam,
        unde perspiciatis dolorum commodi vero delectus maiores, accusantium
        laboriosam itaque sint harum ab rem?
      </div>
      <div className="aboutOwner">
        <h3>About Lancer</h3>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
        blanditiis explicabo, eum accusamus aperiam sed ullam modi illum
        delectus quae! Nostrum odit nesciunt numquam, fuga facere praesentium
        odio facilis iste, unde sit rem minus non!
      </div>

      {/* <div className="rating">
        <h3>Ratings</h3>
        <div className={styles.ratingTable}>
          <div className={styles.ratingRow}>
            <progress
              value="32"
              max="100"
              className={styles.ratingCell}
            ></progress>
            <p className={styles.ratingCell}>1</p>
          </div>
          <div className={styles.ratingRow}>
            <progress
              value="32"
              max="100"
              className={styles.ratingCell}
            ></progress>
            <p className={styles.ratingCell}>1</p>
          </div>
        </div>

      </div> */}

      {/* <div className="review">
        <h3>review</h3>service review
      </div> */}
    </div>
  );
}

export default Description;
