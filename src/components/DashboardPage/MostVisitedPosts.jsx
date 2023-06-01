import MoneyBag from "../../images/common/icons/Money Bag.svg";
import PiggyBank from "../../images/common/icons/Piggy Bank.svg";
import PiggyBank2 from "../../images/common/icons/Piggy Bank 2.svg";
import Donation from "../../images/common/icons/Donation.svg";
import { Fragment } from "react";

const MostVisitedPosts = () => {
  const mostVisitedPostsArr = [
    { name: "ترکیه", money: "7,019,000 تومان" },
    { name: "زاهدان", money: "4,033,000 تومان" },
    { name: "کودکان کار کرج", money: "3,971,000 تومان" },
    { name: "کودکان کار اصفهان", money: "2,904,000 تومان" },
    { name: "نیازمندان منیریه تهران", money: "2,802,000 تومان" },
    { name: "تغذیه 3200 کودک", money: "1,130,000 تومان" },
    { name: "ارسال دارو به مازندران", money: "781,000 تومان" },
  ];

  const iconsArr = [MoneyBag, PiggyBank, PiggyBank2, Donation];
  return (
    <div
      className="bg-[#ffffff] py-[3rem] xxl:py-[5rem] px-[1.7rem] xxl:px-[5rem] mt-[2rem] xxl:mt-[5rem]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <div>
        <h3>آگهی های پر طرفدار</h3>
        <hr />
      </div>
      <table>
        <tbody className="flex flex-col">
          {mostVisitedPostsArr.map((post) => {
            return (
              <tr className="text-[10px] xxl:text-[14px] py-2 xxl:py-4 flex justify-between gap-3 xxl:gap-9 min-w-[14rem] xxl:min-w-[17rem]">
                <th className="flex items-center justify-center gap-3">
                  <img
                    src={iconsArr[Math.floor(Math.random() * iconsArr.length)]}
                    alt=""
                    className="w-6 xxl:w-8"
                  />{" "}
                  {post.name}
                </th>
                <th>{post.money}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MostVisitedPosts;
