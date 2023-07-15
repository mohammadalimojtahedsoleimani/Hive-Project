import MoneyBag from "../../images/common/icons/Money Bag.svg";
import PiggyBank from "../../images/common/icons/Piggy Bank.svg";
import PiggyBank2 from "../../images/common/icons/Piggy Bank 2.svg";
import Donation from "../../images/common/icons/Donation.svg";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { moneyToText } from "../../helper/Utils";

const MostVisitedPosts = () => {
  // const mostVisitedPostsArr = [
  //     { title : "ترکیه" , collected_amount : "7,019,000 تومان" } ,
  //     { title : "زاهدان" , collected_amount : "4,033,000 تومان" } ,
  //     { title : "کودکان کار کرج" , collected_amount : "3,971,000 تومان" } ,
  //     { title : "کودکان کار اصفهان" , collected_amount : "2,904,000 تومان" } ,
  //     { title : "نیازمندان منیریه تهران" , collected_amount : "2,802,000 تومان" } ,
  //     { title : "تغذیه 3200 کودک" , collected_amount : "1,130,000 تومان" } ,
  //     { title : "ارسال دارو به مازندران" , collected_amount : "781,000 تومان" } ,
  // ];
  const [mostVisitedPosts, setMostVisitedPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/charity/api/v1/popular-advertisements/")
      .then((r) => {
        console.log(r.data);
        setMostVisitedPosts(r.data);
      });
  }, []);

  const iconsArr = [MoneyBag, PiggyBank, PiggyBank2, Donation];
  return (
    <div
      className="min-h-[35vh] xxl:min-h-[50vh] bg-[#ffffff] py-[2rem] xxl:py-[3rem] px-[1.7rem] xxl:px-[3rem] mt-[2rem] xxl:mt-[5rem]"
      style={{
        boxShadow: "0px 9px 8px -4px rgba(0,0,0,0.3)",
      }}
    >
      <div className="flex flex-col items-center font-bold text-[13px] xxl:text-[16px] gap-2 mb-3 xxl:mb-5">
        <h3>آگهی های پر طرفدار</h3>
        <hr className="w-[45%] h-[1px]" />
      </div>
      <table className="min-h-[28vh] xxl:min-h-[39vh]">
        <tbody className="flex flex-col">
          {mostVisitedPosts.map((post) => {
            return (
              <Link to={`/post/${post.id}`}>
                <tr className="flex justify-between gap-3 items-center text-[11px] xxl:text-[14px] py-2 xxl:py-4  xxl:gap-9 min-w-[14rem] xxl:min-w-[19rem]">
                  <th className="flex items-center justify-center gap-3">
                    <img
                      src={
                        iconsArr[Math.floor(Math.random() * iconsArr.length)]
                      }
                      alt=""
                      className="w-6 xxl:w-8"
                    />{" "}
                    {post.title}
                  </th>
                  <th className="text-[9px] xxl:text-[12px]">
                    {moneyToText(post.collected_amount)}
                  </th>
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center">
        <Link
          to={"/posts/1"}
          className="font-[600] text-[10.5px] xxl:text-[12px] text-white bg-[#4D7AD2] rounded-sm p-[0.45rem] xxl:p-[0.85rem]"
        >
          مشاهده تمام آگهی ها
        </Link>
      </div>
    </div>
  );
};

export default MostVisitedPosts;
