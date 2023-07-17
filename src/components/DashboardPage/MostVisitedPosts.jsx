import MoneyBag from "../../assets/icons/icons/Money Bag.svg";
import PiggyBank from "../../assets/icons/icons/Piggy Bank.svg";
import PiggyBank2 from "../../assets/icons/icons/Piggy Bank 2.svg";
import Donation from "../../assets/icons/icons/Donation.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { moneyToText } from "../../helper/Utils";
import BASE_URL, { CHARITY } from "../../Config/ApiConfig";

const MostVisitedPosts = () => {
  const [mostVisitedPosts, setMostVisitedPosts] = useState([]);
  const handleTitle = (title) => {
    const maxChars = 18;
    if (title.length > maxChars) {
      return title.slice(0, maxChars) + "...";
    }
    return title;
  };
  useEffect(() => {
    axios.get(BASE_URL + CHARITY.POPULAR_ADVERTISEMENTS).then((r) => {
      console.log(r.data);
      setMostVisitedPosts(r.data.slice(0, 5));
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
                    {handleTitle(post.title)}
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
