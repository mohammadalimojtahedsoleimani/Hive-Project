import { useState, useEffect } from "react";
import styles from "./Time.module.css";
const Time = () => {
  // Get current date and time in Iran
  const now = new Date();
  const timeZone = "Asia/Tehran";
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  const [timeString, setTimeString] = useState(
    new Intl.DateTimeFormat("en-US", options).format(now)
  );

  // Get Shamsi (Persian) calendar date
  const shamsiOptions = {
    timeZone,
    era: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    calendar: "persian",
  };

  const [shamsiDate, setShamsiDate] = useState(
    new Intl.DateTimeFormat("fa-IR-u-ca-persian", shamsiOptions)
      .format(now)
      .slice(0, 11)
      .split("/")
      .reverse()
      .join("/")
  );

  useEffect(() => {
    const newInterval = setInterval(() => {
      setShamsiDate(
        new Intl.DateTimeFormat("fa-IR-u-ca-persian", shamsiOptions)
          .format(now)
          .slice(0, 11)
          .split("/")
          .reverse()
          .join("/")
      );
      setTimeString(new Intl.DateTimeFormat("en-US", options).format(now));
    }, 1000);
    console.log(timeString);
    return () => {
      clearInterval(newInterval);
    };
  }, [timeString, shamsiDate]);
  const dateArr = shamsiDate.split("/");
  const squareStyle = "  rounded-[10px] xxl:p-[1rem] ";
  return (
    <div className={styles.time + " flex bg-[#FCFCFC] xxl:p-[1rem]"}>
      <div className=" flex xxl:text-[21px] ">
        <span>{dateArr[1]}</span>
        <span>/</span>
        <span>{dateArr[2]}</span>
        <span>/</span>
        <span>{dateArr[0]}</span>
      </div>
      <div className="flex">
        <div className={squareStyle + " xxl:text-[12px]"}>
          {timeString.slice(8) === "AM" ? "صبح" : "شب"}
        </div>
        <div className={squareStyle}>{timeString.slice(3, 5)}</div>
        <span>:</span>
        <div className={squareStyle}>{timeString.slice(0, 2)}</div>
      </div>
    </div>
  );
};

export default Time;
