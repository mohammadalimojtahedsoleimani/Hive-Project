import { useEffect, useState } from "react";
import CreatePost from "../../assets/images/DashboardPage/create_post.svg";
import Upload_ from "../../assets/images/DashboardPage/upload_.svg";
import MoneyBag from "../../assets/icons/icons/Money Bag.svg";
import PiggyBank from "../../assets/icons/icons/Piggy Bank.svg";
import PiggyBank2 from "../../assets/icons/icons/Piggy Bank 2.svg";
import Donation from "../../assets/icons/icons/Donation.svg";
import axios from "axios";
import Table from "./common/Table";
import { notify } from "../../helper/toast";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import BASE_URL, { ACCOUNTS, CHARITY } from "../../Config/ApiConfig";

const nameFont = (value) => {
  if (value.length <= 15) {
    return " text-[10px] xxl:text-[12px]";
  }
  return " text-[8px] xxl:text-[10px]";
};

const Posts = () => {
  // variables
  const [newPost, setNewPost] = useState(false);
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [alCharity, setAlCharity] = useState([]);
  const delay = 2000;
  let value = "";
  const [data, setData] = useState({
    image: null,
    title: "",
    content: "",
    category: "",
    status: "true",
    estimated_amount: "",
    collected_amount: "0",
  });
  const options = [
    {
      value: 6,
      label: "حوادث طبیعی",
    },
    {
      value: 7,
      label: "کسب و کار",
    },
    {
      value: 8,
      label: "ازدواج",
    },
    {
      value: 1,
      label: "حیوانات",
    },
    {
      value: 2,
      label: "آموزشی",
    },
    {
      value: 4,
      label: "پزشکی",
    },
    {
      value: 5,
      label: "محیط زیست",
    },
    {
      value: 3,
      label: "سایر",
    },
  ];

  // functions
  const updateDateTime = () => {
    const now = new Date();
    const isoString = now.toISOString();
    setDate(isoString);
  };
  useEffect(() => {
    value = localStorage.getItem("token");
    updateDateTime();
  });

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleImageChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
  };
  const handleDateChange = (e) => {
    axios
      .get(BASE_URL + ACCOUNTS.COMPLETE_PROFILE, {
        headers: {
          Authorization: `JWT ${value}`,
        },
      })
      .then((r) => {
        console.log(r.data);
      });

    e.preventDefault();
    console.log(date);
    console.log(value);
    console.log(data.image)
    const formData = new FormData();
    formData.append("image", data.image, data.image.name);
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("status", data.status);
    formData.append("estimated_amount", data.estimated_amount);
    formData.append("collected_amount", data.collected_amount);
    formData.append("published_date", date);

    // api-call

    axios
      .post(BASE_URL + CHARITY.ADS, formData, {
        headers: {
          Authorization: `JWT ${value}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        notify("ثبت پست با موفقیت انجام شد.", "success");
        const timer = setTimeout(() => {
          navigate(`/post/${response.data.id}`);
        }, delay);
      })
      .catch(() => {
        notify("خطایی رخ داد، دوباره تلاش کنید.", "er");
      });
  };
  useEffect(() => {
    axios
      .get(BASE_URL + CHARITY.USER_ADVERTISEMENTS, {
        headers: {
          Authorization: `JWT ${value}`,
        },
      })
      .then((r) => {
        console.log(r);
        console.log(r.data);
        setAlCharity(r.data);
        console.log(alCharity);
      });
  }, []);

  const iconsArr = [MoneyBag, PiggyBank, PiggyBank2, Donation];

  const setStatus = (status, percent) => {
    let style = {};
    let text = "";
    if (status === true) {
      const percentStr = Math.round(percent).toString();
      const compeletePercent = "100";
      if (percentStr === compeletePercent) {
        style = {
          backgroundColor: "rgba(43, 219, 121, 1)",
          color: "rgba(255, 255, 255, 1)",
        };
        text = "تکمیل شده";
      } else {
        style = {
          backgroundColor: "rgba(222, 237, 229, 1)",
          color: "rgba(66, 122, 91, 1)",
        };
        text = "فعال";
      }
    } else {
      style = {
        backgroundColor: "rgba(255, 168, 0, 1)",
        color: "rgba(255, 241, 203, 1)",
      };
      text = "در حال بررسی";
    }

    return (
      <div
        className=" p-[5px] xxl:p-[10px] text-[10px] xxl:text-[12px] rounded-[2px]"
        style={style}
      >
        {" "}
        {text}
      </div>
    );
  };
  const shamsiStr = (date) => {
    const moment = require("jalali-moment");
    const shamsiDate = moment(date).locale("fa").format("YYYY/MM/DD");
    console.log(shamsiDate);
    console.log(shamsiDate.split("/"));
    return shamsiDate;
  };
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    console.log(alCharity);
    const newData = alCharity.map((item) => {
      return {
        title: (
          <div
            className={
              nameFont(item.title) + " flex items-center text-[#808080] gap-2"
            }
          >
            <img
              src={iconsArr[Math.floor(Math.random() * iconsArr.length)]}
              alt=""
              className="rounded-[50%] border-[5px] border-[#ECECEC]"
            />
            {item.title}{" "}
          </div>
        ),
        status: setStatus(item.status, item.collected_percentage),
        percent: item.collected_percentage,
        date: shamsiStr(item.published_date),
        money: item.collected_amount,
      };
    });

    setTableData(newData);
  }, [alCharity]);
  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  const postsTable = () => {
    return (
      <Table
        itemsPerPage={7}
        titlesArr={[
          { name: "نام آگهی", value: "title" },
          { name: "وضعیت", value: "status" },
          { name: "درصد کامل شده", value: "percent" },
          { name: "تاریخ ثبت", value: "date" },
          { name: "مبلغ کمک شده", value: "money" },
        ]}
        dataArr={tableData}
        minHeight="60vh"
      />
    );
  };
  const oldPosts = (
    <div className=" h-full pt-[4rem] xxl:pt-[6rem]  mr-[1rem] xxl:mr-[3rem]">
      <div className="flex gap-4 ">
        <span className="font-medium text-[20px] xxl:text-[25px]">
          تمام آگهی های ثبت شده
        </span>
        <button
          onClick={() => {
            setNewPost(true);
          }}
          className="font-[600] text-[14px] text-white rounded-md bg-[#4D7AD2] p-[0.4rem] xxl:p-[0.8rem]"
        >
          ایجاد آگهی جدید
        </button>
      </div>
      <div className="h-fit mt-[1.5rem] xxl:mt-[2rem]">{postsTable()}</div>
    </div>
  );
  // my work
  const newPostsContainer = (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
      className="mt-[8vh] mr-[2.5rem] xxl:mr-[4rem] ml-[1rem] xxl:ml-[2rem]  p-[2rem] xxl:p-[3rem] bg-[#f9f9f9bb]"
    >
      <div className="flex gap-3">
        <img src={CreatePost} className="w-[1rem] xxl:w-[2rem]" alt="" />
        <h2 className=" font-[700] text-[29px] xxl:text-[34px]">
          ایجاد آگهی جدید
        </h2>
      </div>
      <div className="flex mt-[1.5rem] xxl:mt-[3rem]">
        <div className="flex-[3] pl-[1.5rem] xxl:pl-[2.5rem]">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className=" font-[700] text-[20px] xxl:text-[24px] mb-[0.2rem] xxl:mb-[0.4rem]"
            >
              عنوان آگهی{" "}
            </label>
            <input
              type="text"
              placeholder="کمک به کودکان ..."
              value={data.title}
              onChange={changeHandler}
              name="title"
              id="title"
              style={{ border: "solid #B5B5B5 2px" }}
              className=" rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className=" font-[700] text-[20px] xxl:text-[24px] mt-[0.7rem] xxl:mt-[1.4rem] mb-[0.2rem] xxl:mb-[0.4rem]"
            >
              دسته بندی آگهی
            </label>
            <select
              className="w-full flex justify-start rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px] cursor-pointer"
              id="category"
              style={{ border: "solid #B5B5B5 2px" }}
              name="category"
              onChange={changeHandler}
              value={data.category}
            >
              <option value="">یک دسته بندی را انتخاب کنید</option>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="cursor-pointer"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className=" font-[700] text-[20px] xxl:text-[24px] mt-[0.7rem] xxl:mt-[1.4rem] mb-[0.2rem] xxl:mb-[0.4rem]"
            >
              توضیحات
            </label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              value={data.content}
              onChange={changeHandler}
              style={{ border: "solid #B5B5B5 2px", resize: "none" }}
              className=" rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className=" font-[700] text-[20px] xxl:text-[24px] mt-[0.7rem] xxl:mt-[1.4rem] mb-[0.2rem] xxl:mb-[0.4rem]"
            >
              مبلغ
            </label>
            <input
              type="number"
              placeholder="100.000 تومان"
              value={data.estimated_amount}
              onChange={changeHandler}
              name="estimated_amount"
              style={{ border: "solid #B5B5B5 2px" }}
              className=" rounded-lg text-[13px] xxl:text-[16px] text-[#ABABAB] px-[4px] py-[5px]"
            />
          </div>
        </div>
        <div className="flex-[1.3] flex items-start justify-center mt-[1rem] xxl:mt-[2rem]">
          <input
            type="file"
            accept=".png, .JPG, .jpeg"
            className="input_field"
            hidden
            name="image"
            onChange={handleImageChange}

          />
          <div
            className="rounded-[10px] border-dashed border-[#B5B5B5] border-[5px] p-[3rem] border-spacing-10 xxl:p-[5.5rem]"
            onClick={() => document.querySelector(".input_field").click()}
          >
            <img className="" src={Upload_} alt="upload button" />
            <span className="text-[10px] xxl:text-[14px]">انتخاب تصویر</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end pl-1 xxl:pl-3">
        <button
          onClick={handleDateChange}
          className="px-3 py-2 bg-[#4D7AD2] text-white rounded-lg font-[700] text-[20px] xxl:text-[24px]"
        >
          ارسال جهت بررسی
        </button>
      </div>
      <ToastContainer />
    </div>
  );
  return newPost ? newPostsContainer : oldPosts;
};
// end
export default Posts;
