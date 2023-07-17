import Calendar from "../../../../assets/images/common/PostCard/calendar.svg";
import Person from "../../../../assets/images/common/PostCard/person.svg";
import Category from "../../../../assets/images/common/PostCard/category.svg";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../../../pages/CharityPage/style/CharityPage.module.css";
import stle from "../../../PostsPage/common/PostCard.module.css";
import React from "react";
import DateTransformer from "../../../../helper/dateTransformer";
import { handleTitle, moneyToText } from "../../../../helper/Utils";

const PostCard = ({ post }) => {
  let date = post.published_date;
  let dateOnly ;
  const navigate = useNavigate();
  if (date !== null) {
    dateOnly = date.split("T")[0];
  }
  const handleSnippet = (snippet) => {
    const maxChars = 180;
    if (snippet.length > maxChars) {
      return `${snippet.slice(0, maxChars)}...`;
    }
    return snippet;
  };
  return (
    <div
      onClick={() => {
        navigate(`/post/${post.id}`);
      }}
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
      className="bg-white w-[350px] xxl:w-[450px] rounded-lg overflow-hidden hover:cursor-pointer"
    >
      <Link to={`#`}>
        <div
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: "cover",
          }}
          className="w-full  h-[250px] xxl:h-[350px] cursor-pointer"
        ></div>
      </Link>
      <div className="px-5 py-3 xxl:py-5 xxl:p-7">
        <div className="flex justify-between text-gray-400">
          <span className="flex justify-end items-center gap-1 xxl:gap-3 text-[11px] xxl:text-[15px]">
            <img src={Person} alt="" />
            {post.raiser_full_name}
          </span>
          <span className="flex items-center gap-1 xxl:gap-3 text-[10px] xxl:text-[14px]">
            <img src={Calendar} alt="" />
            {DateTransformer(dateOnly)}
          </span>
        </div>
        <h2
          className="text-[#4D7AD2] font-bold text-[15px] xxl:text-[21px] my-3 xxl:my-6"
          data-testid="title-1"
        >
          {handleTitle(post.title, 29)}
        </h2>
        <p className="text-[#555555] text-[10px] xxl:text-[14px] h-12 xxl:h-20">
          {handleSnippet(post.snippet)}
        </p>
        <div className="flex justify-end ">
          <div
            className={
              stle.category +
              " flex justify-center items-center gap-1 xxl:gap-2 px-1 xxl:px-2 py-[0.05rem] xxl:py-[0.08rem] text-[10px] xxl:text-[12px]"
            }
          >
            {post.category.name}{" "}
            <img src={Category} alt="" className="w-[5px] xxl:w-[8px]" />
          </div>
        </div>
        <div className="w-[75%] pb-2 xxl:pb-3">
          <div className="flex justify-between">
            <span className="text-[10px] xxl:text-[14px] font-bold">
              کمک های مالی جمع شده
            </span>
            <span className="text-[10px] xxl:text-[14px] font-bold">
              {post.collected_percentage}%
            </span>
          </div>
          <div className={styles.totalBar}>
            <div className={stle.progressBar}>
              <div
                className={stle.progressBarDisplay}
                style={{
                  width: `${post.collected_percentage}%`,
                  backgroundColor: "#4D7AD2",
                  transition: "width 0.5s",
                }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between mt-1 xxl:mt-2">
            <span className="text-[10px] xxl:text-[12px]">
              جمع شده : {moneyToText(post.collected_amount)}
            </span>
            <span className="text-[10px] xxl:text-[12px]">
              هدف : {moneyToText(post.estimated_amount)}
            </span>
          </div>
        </div>
        <div className="pb-1 pl-1 text-left xxl:pb-3 xxl:pl-3">
          <button
            style={{ border: "solid #4D7AD2 1.5px", borderRadius: "5px" }}
            className="text-[#4D7AD2] hover:text-[white] hover:bg-[#4D7AD2] text-[12px] xxl:text-[16px] px-2 xxl:px-4 py-1 xxl:py-2"
          >
            کمک میکنم
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
