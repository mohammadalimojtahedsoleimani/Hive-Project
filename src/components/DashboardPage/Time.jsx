import { useState, useEffect } from "react";
import styles from "./Time.module.css";
const Time = () => {
  // Get current date and time in Iran
  let now = new Date();
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
    const newInterval = setTimeout(() => {
      let now = new Date();
      setShamsiDate(
        new Intl.DateTimeFormat("fa-IR-u-ca-persian", shamsiOptions)
          .format(now)
          .slice(0, 11)
          .split("/")
          .reverse()
          .join("/")
      );
      setTimeString(new Intl.DateTimeFormat("en-US", options).format(now));
    }, 2001);
    // console.log(timeString);
    return () => {
      clearInterval(newInterval);
    };
  }, [timeString, shamsiDate]);
  const dateArr = shamsiDate.split("/");
  const squareStyle =
    "  rounded-[10px]  flex justify-center items-center border-solid border-[#E6E6E6] rounded-[5px] border-[1px] h-[2.7rem] xxl:h-[3rem] w-[2.7rem] xxl:w-[3rem]  text-[11px] xxl:text-[12px] text-center";
  // console.log(timeString.slice(8).length);
  // console.log(timeString);
  return (
    <div
      className={
        styles.time +
        " flex items-center bg-[#FCFCFC] p-[1rem] xxl:p-[2rem] gap-4"
      }
    >
      <div className=" flex xxl:text-[21px]">
        <span>{dateArr[1]}</span>
        <span>/</span>
        <span>{dateArr[2]}</span>
        <span>/</span>
        <span>{dateArr[0]}</span>
      </div>
      <div className="flex items-center gap-1">
        <div
          className={
            squareStyle +
            " bg-[#4D7AD2] text-[white] text-[10px] xxl:text-[12px]"
          }
        >
          {timeString.slice(9)}
        </div>
        <div className={squareStyle}>{timeString.slice(3, 5)}</div>
        <span className="text-[10px] xxl:text-[12px]">:</span>
        <div className={squareStyle}>{timeString.slice(0, 2)}</div>
      </div>
    </div>
  );
};

export default Time;
