import Pattern from "../../assets/images/DashboardPage/pattern.svg";
import Table from "./common/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL, { CHARITY } from "../../Config/ApiConfig";
import allDontators from "../../data/AllDonators";
const Dashboard = () => {
  //variables
  const [totalMoney, setTotalMoney] = useState("");
  const [totalDonatores, setTotalDonatores] = useState("");
  const [donatores, setDonatores] = useState([]);
  const [totalCharities, setTotalCharities] = useState("");

  // functions
  const generalInfo = [
    { topText: `${totalMoney}`, bottomText: "مبالغ جمع شده" },
    { topText: `${totalCharities}`, bottomText: "آگهی اضافه شده" },
    { topText: `${totalDonatores}`, bottomText: "حامی اضافه شده" },
  ];
  useEffect(() => {
    axios.get(BASE_URL + CHARITY.TOTAL_COLLECTED_AMOUNT).then((r) => {
      setTotalMoney(r.data.total_collected_amount);
      console.log(r.data);
      console.log(totalMoney);
    });
    axios.get(BASE_URL + CHARITY.ALL_DONATORS).then((res) => {
      console.log(res);
      setTotalDonatores(res.data.length);
      setDonatores(res.data.results);
    });
    axios.get(BASE_URL + CHARITY.ADVERTISEMENT_COUNT).then((response) => {
      setTotalCharities(response.data.count);
    });
  }, []);

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
        dataArr={allDontators}
        minHeight="58.5"
      />
    </div>
  );
};

export default Dashboard;
