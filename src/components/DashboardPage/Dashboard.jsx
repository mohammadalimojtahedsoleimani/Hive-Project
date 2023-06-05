import Pattern from "../../images/DashboardPage/pattern.svg";
import Avatar1 from "../../images/common/avatars/avatar_1.svg";
import Avatar2 from "../../images/common/avatars/avatar_2.svg";
import Avatar3 from "../../images/common/avatars/avatar_3.svg";
import Table from "./common/Table";

// const icon_name = <div><img src={Avatar1}/></div>
const Dashboard = () => {
  const nameFont = (value) => {
    if (value.length <= 15) {
      return " text-[10px] xxl:text-[12px]";
    }
    return " text-[8px] xxl:text-[10px]";
  };
  const generalInfo = [
    { topText: " 400,000 تومان", bottomText: "مبالغ جمع شده" },
    { topText: "42", bottomText: "آگهی اضافه شده" },
    { topText: "200", bottomText: "حامی اضافه شده" },
  ];
  return (
    <div className="px-[3.5rem] xxl:px-[5rem] mt-20 xxl:mt-36">
      <div>
        <h2 className=" font-medium mb-[2rem] xxl:mb-[3] text-[18px] xxl:text-[25px]">
          نمای کلی ،
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridColumnGap: "3rem",
          }}
        >
          {generalInfo.map((info) => (
            <div
              style={{
                background: `url(${Pattern}) no-repeat`,
                backgroundSize: "cover",
                position: "relative",
                // opacity: "50%",
                // boxShadow: "0px 14px 15px -9px rgba(0,0,0,0.45)",
                // boxShadow: "0px 9px 8px -4px rgba(0,0,0,0.45)",
                // boxShadow: "0px 9px 8px -1px rgba(0,0,0,0.3)",
                boxShadow: "0px 9px 8px -4px rgba(0,0,0,0.3)",
              }}
              className=" overflow-hidden rounded-sm p-[0.5rem] xxl:p-[1.2rem]"
            >
              <div className=" absolute top-0 bottom-0 left-0 right-0 opacity-[50%] bg-[#212121] z-0"></div>
              <h3 className=" text-[19px] xxl:text-[24px] relative z-[1] text-white">
                {info.topText}
              </h3>
              <span className=" text-[9px] xxl:text-[12px] relative z-[1] text-white">
                {info.bottomText}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <h2 className="font-medium text-[20px] xxl:text-[27px] mt-14 xxl:mt-24">
            تمام حامی ها
          </h2>
          <p className=" text-[10px] xxl:text-[12px] text-[#B3B3B3]">
            تمام حامی هایی که از آگهی های شما حمایت میکنند
          </p>
        </div>
      </div>
      <Table
        titlesArr={[
          { name: "نام حامی", value: "supporter" },
          { name: "وضعیت", value: "status" },
          { name: "درصد کامل شده", value: "percent" },
          { name: "تاریخ عضویت", value: "date" },
          { name: "مبلغ کمک شده", value: "money" },
        ]}
        dataArr={[
          {
            supporter: (
              <div
                className={
                  nameFont("زهرا نوروزی") +
                  " flex items-center text-[#808080] gap-2"
                }
              >
                <img
                  src={Avatar1}
                  alt=""
                  className="rounded-[50%] border-[5px] border-[#ECECEC]"
                />
                زهرا نوروزی{" "}
              </div>
            ),
            status: (
              <div className=" p-[5px] xxl:p-[10px] text-[10px] xxl:text-[12px] text-[#427A5B] bg-[#DEEDE5] rounded-[2px]">
                تکمیل شده
              </div>
            ),
            percent: 40,
            date: "1398/11/22",
            money: 400000,
          },
          {
            supporter: (
              <div
                className={
                  nameFont("سید امیررضا قربانی زرین کلایی اصل") +
                  " flex items-center text-[#808080] gap-2"
                }
              >
                <img
                  src={Avatar3}
                  alt=""
                  className="rounded-[50%] border-[5px] border-[#ECECEC]"
                />
                سید امیررضا قربانی زرین کلایی اصل{" "}
              </div>
            ),
            status: (
              <div className=" p-[5px] xxl:p-[10px] text-[10px] xxl:text-[12px] text-[#427A5B] bg-[#DEEDE5] rounded-[2px]">
                تکمیل شده
              </div>
            ),
            percent: 60,
            date: "1398/11/22",
            money: 6500000,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
