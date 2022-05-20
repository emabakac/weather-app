import React from "react";
import styles from "./LoaderComponent.module.css";

const LoaderComponent: React.FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoaderComponent;
