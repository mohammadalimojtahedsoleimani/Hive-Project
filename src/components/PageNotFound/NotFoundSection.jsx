import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundSection.module.css";
const NotFoundSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textBigContainer}>
        <div>
          <h1>404</h1>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.text}>:/ Page not found </p>
        </div>
      </div>
      <Link to="/" className={styles.button}>
        برگشت به خانه
      </Link>
    </div>
  );
};

export default NotFoundSection;
