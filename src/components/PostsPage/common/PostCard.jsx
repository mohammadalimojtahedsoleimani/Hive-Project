import Calendar from "../../../images/common/PostCard/calendar.svg";
import Person from "../../../images/common/PostCard/person.svg";
import User from "../../../images/common/PostCard/user.svg";
import Category from "../../../images/common/PostCard/category.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../../pages/CharityPage.module.css";
import React, { useEffect, useState } from "react";
import stle from "./PostCard.module.css";
import axios from "axios";
import DateTransformer from "../../../helper/dateTransformer";
import { handleTitle, moneyToText } from "../../../helper/Utils";
import BASE_URL, { CHARITY } from "./../../../Config/ApiConfig";

const PostCard = ({
  id,
  image,
  name,
  categoryName,
  date,
  title,
  description,
  collected,
  target,
  collectedPercentage,
}) => {
  const navigate = useNavigate();
  console.log("postss ", image);
  const [nOfDonatores, setNofDonatores] = useState("");
  const dateOnly = date.split("T")[0];
  let formattedNumber = collected.toLocaleString("fa-IR-u-nu-arab", {
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    axios.get(BASE_URL + CHARITY.ADS + `${id}/donators/`).then((r) => {
      setNofDonatores(r.data.length);
    });
  }, []);
  const totalDonators = 14;
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
      <div className={stle.content_parent}>
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
        <div className="px-4 py-3 xxl:px-7 xxl:py-5">
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
              {DateTransformer(dateOnly)}
            </span>
          </div>
          <h2 className="font-bold text-[15px] xxl:text-[21px] mt-3 xxl:mt-3 text-blue-500 text-opacity-100">
            {handleTitle(title, 25)}
          </h2>
          <div className="flex justify-between ">
            <div className="right flex justify-center items-center text-[#8D8E9F] text-[11px] xxl:text-[14px] gap-1 xxl:gap-2 ">
              <img src={User} alt="" className=" w-[17px] xxl:w-[20px]" />
              {nOfDonatores}
            </div>
            <div
              className={
                stle.category +
                " flex justify-center items-center gap-1 xxl:gap-2 px-1 xxl:px-2 py-[0.05rem] xxl:py-[0.08rem] text-[9px] xxl:text-[11px]"
              }
            >
              {categoryName}{" "}
              <img src={Category} alt="" className="w-[5px] xxl:w-[8px]" />
            </div>
          </div>
          {/* <p className='text-[10px] xxl:text-[14px] h-16 xxl:h-24'>{description}</p> */}
          <div className="w-[100%] py-4 xxl:pb-6 xxl:pt-4">
            <div className="flex justify-between">
              <span className="text-[10px] xxl:text-[14px] font-bold">
                کمک های مالی جمع شده
              </span>
              <span className="text-[10px] xxl:text-[14px] font-bold">
                {collectedPercentage}%
              </span>
            </div>
            <div className={styles.totalBar}>
              <div className={stle.progressBar}>
                <div
                  className={stle.progressBarDisplay}
                  style={{
                    width: `${collectedPercentage}%`,
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
          <div className="pb-1 pl-1 text-left xxl:pb-1 xxl:pl-2">
            <button
              style={{ border: "solid #4D7AD2 1.5px", borderRadius: "5px" }}
              className={
                stle.button +
                " text-[#4D7AD2] text-[12px] xxl:text-[16px] p-2 xxl:px-4 xxl:py-2"
              }
            >
              کمک میکنم
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
