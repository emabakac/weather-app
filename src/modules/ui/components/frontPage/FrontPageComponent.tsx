import React from "react";
import styles from "./FrontPageComponent.module.css";

const FrontPageComponent: React.FC = () => {
  return (
    <div className={styles.welcomeMessage}>
      <h2>Welcome to Weather App!</h2>
      <h2>
        Access current weather data for any location including over 200,000
        cities!
      </h2>
    </div>
  );
};

export default FrontPageComponent;
