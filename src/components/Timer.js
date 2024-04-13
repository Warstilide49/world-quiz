import React, { useState, useEffect } from "react";
import styles from "../styles/timer.module.css";

const Timer = ({ command }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive]);

  useEffect(() => {
    if (command === "play") {
      setIsActive(true);
    } else if (command === "pause") {
      setIsActive(false);
    } else if (command === "reset") {
      setIsActive(false);
      setTime(0);
    }
  }, [command]);

  const prepend = (value) => {
    let str = value.toString();
    if (str.length === 1) {
      str = "0".concat(str);
    }
    return str;
  };

  return (
    <div className={styles.timer}>
      <h3>{`${prepend(Math.floor(time / 60))} : ${prepend(Math.floor(time % 60))} : ${prepend(((time * 100) % 100).toFixed(0))}`}</h3>
    </div>
  );
};

export default Timer;
