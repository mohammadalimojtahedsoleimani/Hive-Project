import Calendar from "../../../images/LandingPage/selected_posts_calendar.svg";
import Person from "../../../images/LandingPage/selected_posts_person.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../charityPage/CharityPage.module.css";
import React from "react";
import stle from "./PostCard.module.css";
const PostCard = ({
  id,
  image,
  name,
  date,
  title,
  description,
  collected,
  target,
  collected_percentage,
}) => {
  const navigate = useNavigate();
  console.log("postss ", image);

  const dateOnly = date.split("T")[0];
  let pub_date = new Date(`${dateOnly}`); // your date from API
  let hijriShamsiDate = pub_date.toLocaleDateString(
    "fa-IR-u-ca-persian-nu-arab",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );
  let formattedNumber = collected.toLocaleString("fa-IR-u-nu-arab", {
    minimumFractionDigits: 0,
  });
  const moneyToText = (money) => {
    return money.toLocaleString() + " تومان";
  };
  return (
    <div
      onClick={() => {
        navigate(`/post/${id}`);
      }}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
      }}
      className={stle.parent + " w-[300px] xxl:w-[350px] mx-4 xxl:mx-7"}
    >
      <Link to={"#"}>
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
          className="w-full  h-[200px] xxl:h-[300px] cursor-pointer"
        ></div>
      </Link>
      {/* <img src={image} alt="" className="w-full h-[200px] xxl:h-[270px]" /> */}
      <div className="px-4 xxl:px-7 py-3 xxl:py-5">
        <div className="flex justify-between text-gray-400">
          <span className="flex items-center gap-1 xxl:gap-3 text-[12px] xxl:text-[14px] ">
            <img
              src={Person}
              alt=""
              className="w-[17px] xxl:w-[20px] flex items-center"
            />
            {name}
          </span>
          <span className="flex items-center gap-1 xxl:gap-3 text-[11px] xxl:text-[13px] pl-2 xxl:pl-3">
            <img src={Calendar} alt="" className="w-[13px] xxl:w-[17px]" />
            {hijriShamsiDate}
          </span>
        </div>
        <h2 className="font-bold text-[15px] xxl:text-[21px] mt-3 xxl:mt-6 text-blue-500 text-opacity-100">
          {title}
        </h2>
        {/* <p className='text-[10px] xxl:text-[14px] h-16 xxl:h-24'>{description}</p> */}
        <div className="w-[100%] py-4 xxl:py-8">
          <div className="flex justify-between">
            <span className="text-[10px] xxl:text-[14px] font-bold">
              کمک های مالی جمع شده
            </span>
            <span className="text-[10px] xxl:text-[14px] font-bold">
              {collected_percentage}%
            </span>
          </div>
          <div className={styles.totalBar}>
            <div className={stle.progressBar}>
              <div
                className={stle.progressBarDisplay}
                style={{
                  width: `${collected_percentage}%`,
                  backgroundColor: "#4D7AD2",
                  transition: "width 0.5s",
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-2 xx:mt-4">
            <span className="text-[10px] xxl:text-[12px]">
              جمع شده : {moneyToText(collected)}
            </span>
            <span className="text-[10px] xxl:text-[12px]">
              هدف : {moneyToText(target)}
            </span>
          </div>
        </div>
        <div className="pb-1 pl-1 text-left xxl:pb-3 xxl:pl-3">
          <button
            style={{ border: "solid #4D7AD2 1.5px", borderRadius: "5px" }}
            className={
              stle.button +
              " text-[#4D7AD2] text-[12px] xxl:text-[16px] p-2 xxl:p-4"
            }
          >
            کمک میکنم
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
