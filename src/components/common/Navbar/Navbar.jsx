import React, { useContext, useEffect } from "react";
import styles from "./Navbar.module.css";
import Search from "../../../images/common/Navbar/search.svg";
import Profile from "../../../images/common/Navbar/profile.png";
import Logo from "../../../images/common/Navbar/logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DakhelContext } from "../../../context/DakhelContext";

import { notify } from "../../../helper/toast";
import { LoginModalContext } from "../../../context/LoginContext";

const Navbar = ({ active, dark }) => {
  const { isIn, setIsIn } = useContext(DakhelContext);
  const { isOpenLogin } = useContext(LoginModalContext);
  const links = [
    { key: "map", value: "نقشه راه " },
    { key: "contact_us", value: "ارتباط با ما" },
    { key: "/AboutUs", value: " درباره ما" },
    { key: "home", value: "خانه" },
  ];
  const getIn = (
    <div className="flex gap-3 xxl:gap-5 pr-6 xxl:pr-10">
      <button
        className={
          styles.sign_up +
          " py-[0.5rem] px-[0.75rem] xxl:px-[1.5rem] xxl:py-[1rem] text-[0.75rem] xxl:text-[1rem] xxl:leading-[0.5rem]"
        }
      >
        ثبت نام
      </button>
      <button
        // onClick={() => setIsOpenLogin(true)}
        className={
          styles.login +
          " py-[0.5rem] px-[0.75rem] xxl:px-[1.5rem] xxl:py-[1rem] text-[1rem] xxl:text-[1.25rem] xxl:leading-[0.5rem]"
        }
      >
        ورود
      </button>
    </div>
  );
  const profile = (name, profileUrl) => {
    return (
      <Link to="/dashboard" className="pr-6 xxl:pr-10">
        <div className="flex gap-3">
          <div>
            <img
              src={profileUrl}
              alt="profile pic"
              className="w-[30px] xl:w-[40px] xxl:w-[50px] h-[30px] xl:h-[40px] xxl:h-[50px]"
            />
          </div>
          <div className={styles.prof_parent + " gap-1"}>
            <span className="text-sm font-medium xl:text-base xxl:text-xl text-[#4D7AD2]">
              {name}
            </span>
          </div>
        </div>
      </Link>
    );
  };
  const isActive = (item) => {
    if (active === item.key) {
      return (
        <div>
          <Link
            className="text-xs font-medium xl:text-sm xxl:text-lg text-[#4D7AD2]"
            to={item.key}
          >
            {item.value}
          </Link>
          <hr className="text-[#4D7AD2]" />
        </div>
      );
    }
    return (
      <Link
        className="text-xs font-medium xl:text-sm xxl:text-lg text-[#4D7AD2]"
        to={item.key}
      >
        {item.value}
      </Link>
    );
  };
  useEffect(() => {
    let value = localStorage.getItem("token");
    if (value !== undefined && value !== null) {
      setIsIn(true);
    }
  }, []);

  // useEffect(() => {
  //   if (isIn) {
  //     notify("ورود موفقیت آمیز بود", "success");
  //   }
  // }, [isIn]);

  return (
    <nav
      className={
        styles.navbar +
        " px-[10.5rem] xl:px-[15rem] xxl:px-[19rem] top-8 xxl:top-10"
      }
    >
      <div
        className="flex w-full py-2 rounded-[71px] px-12 xl:px-16 xxl:px-[5rem] gap-3 xxl:gap-5"
        style={{ backgroundColor: dark ? "#252A34" : "white" }}
      >
        {/* right */}
        <div className={styles.right + " gap-2"}>
          <div>
            <Link to="/posts/1">
              <img
                src={Search}
                alt=""
                className="w-[2rem] xl:w-[2.5rem] xxl:w-[3rem] h-[2rem] xl:h-[2.5rem] xxl:h-[3rem]"
              />
            </Link>
          </div>
          {isIn
            ? profile(
                "امیلی جین استون",
                "http://127.0.0.1:8000/media/ads/FxunEVSWcAATZR1.jpg"
              )
            : getIn}
        </div>
        {/* center */}
        <div className={styles.center}>
          {links.map((item) => isActive(item))}
        </div>
        {/* left */}

        <div className={styles.left}>
          <Link to="/" className="flex content-start items-center ">
            <span
              className={styles.brand_name + " text-[20px] xxl:text-[31px]"}
            >
              Hive
            </span>
            <img src={Logo} className="w-[3rem] xxl:w-[4rem]" alt="logo" />
          </Link>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
