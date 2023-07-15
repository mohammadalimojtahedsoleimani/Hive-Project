import Pattern from "../../images/DashboardPage/pattern.svg";
import Avatar1 from "../../images/common/avatars/avatar_1.svg";
import Avatar2 from "../../images/common/avatars/avatar_2.svg";
import Avatar3 from "../../images/common/avatars/avatar_3.svg";
import Table from "./common/Table";
import { useEffect, useState } from "react";
import axios from "axios";

// const icon_name = <div><img src={Avatar1}/></div>
const Dashboard = () => {
  //variables
  const [totalMoney, setTotalMoney] = useState("");
  const [totalDonatores, setTotalDonatores] = useState("");
  const [donatores, setDonatores] = useState([]);
  const [totalCharities, setTotalCharities] = useState("");
  const nameFont = (value) => {
    if (value.length <= 15) {
      return " text-[10px] xxl:text-[12px]";
    }
    return " text-[8px] xxl:text-[10px]";
  };
  // functions
  const generalInfo = [
    { topText: `${totalMoney}`, bottomText: "مبالغ جمع شده" },
    { topText: `${totalCharities}`, bottomText: "آگهی اضافه شده" },
    { topText: `${totalDonatores}`, bottomText: "حامی اضافه شده" },
  ];
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/charity/api/v1/ads/total_collected_amount/")
      .then((r) => {
        setTotalMoney(r.data.total_collected_amount);
        console.log(r.data);
        console.log(totalMoney);
      });
    axios
      .get("http://127.0.0.1:8000/charity/api/v1/ads/all_donators/")
      .then((res) => {
        console.log(res);
        setTotalDonatores(res.data.length);
        setDonatores(res.data.results);
      });
    axios
      .get("http://127.0.0.1:8000/charity/api/v1/ads/advertisement_count/")
      .then((response) => {
        setTotalCharities(response.data.count);
      });
  }, []);

  const [tableData, setTableData] = useState([]);
  //   useEffect(() => {
  //     console.log(alCharity);
  //     const newData = alCharity.map((item) => {
  //       return {
  //         title: (
  //           <div
  //             className={
  //               nameFont(item.title) + " flex items-center text-[#808080] gap-2"
  //             }
  //           >
  //             <img
  //               src={iconsArr[Math.floor(Math.random() * iconsArr.length)]}
  //               alt=""
  //               className="rounded-[50%] border-[5px] border-[#ECECEC]"
  //             />
  //             {item.title}{" "}
  //           </div>
  //         ),
  //         status: setStatus(item.status, item.collected_percentage),
  //         percent: item.collected_percentage,
  //         date: item.date,
  //         money: item.collected_amount,
  //       };
  //     });

  //     setTableData(newData);
  //   }, [alCharity]);

  return (
    <div className="h-full px-[3.5rem] xxl:px-[5rem] pt-20 xxl:pt-36">
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
          <h2 className="font-medium text-[20px] xxl:text-[27px] mt-12 xxl:mt-16">
            تمام حامی ها
          </h2>
          <p className=" text-[10px] xxl:text-[12px] text-[#B3B3B3] mb-2 xxl:mb-4">
            تمام حامی های وبسایت هایو
          </p>
        </div>
      </div>
      <Table
        itemsPerPage={5}
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] border-[5px] w-[29px] xxl:w-[32px] border-[#ECECEC]"
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
                  className="rounded-[50%] w-[29px] xxl:w-[32px] border-[5px] border-[#ECECEC]"
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
        minHeight="58.5"
      />
    </div>
  );
};

export default Dashboard;
