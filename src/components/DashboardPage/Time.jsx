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
    "  rounded-[10px] p-[0.5rem] xxl:p-[1rem] border-solid border-[#E6E6E6] rounded-[5px] border-[1px] w-[2.2rem] xxl:w-[5rem]  text-[10px] xxl:text-[12px] text-center";
  // console.log(timeString.slice(8).length);
  // console.log(timeString);
  return (
    <div
      className={
        styles.time +
        " flex bg-[#FCFCFC] p-[1rem] xxl:p-[2rem] mt-[5rem] xxl:mt-[6rem] gap-4"
      }
    >
      <div className=" flex xxl:text-[21px] pt-[0.5rem] xxl:pt-[1rem]">
        <span>{dateArr[1]}</span>
        <span>/</span>
        <span>{dateArr[2]}</span>
        <span>/</span>
        <span>{dateArr[0]}</span>
      </div>
      <div className="flex gap-1">
        <div
          className={
            squareStyle +
            " bg-[#3B8174] text-[white] text-[10px] xxl:text-[12px]"
          }
        >
          {timeString.slice(9) === "AM" ? "صبح" : "شب"}
        </div>
        <div className={squareStyle}>{timeString.slice(3, 5)}</div>
        <span className="mt-[0.5rem] xxl:mt-[1rem]  text-[10px] xxl:text-[12px]">
          :
        </span>
        <div className={squareStyle}>{timeString.slice(0, 2)}</div>
      </div>
    </div>
  );
};

export default Time;
