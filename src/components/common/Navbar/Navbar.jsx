import React, { useContext, useEffect, useState } from "react";
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
import { ProfileContext } from "../../../context/ProfileContext";
import axios from "axios";
import Login from "../../modal/Login/Login";

const Navbar = ({ active, dark }) => {
  const { isIn, setIsIn } = useContext(DakhelContext);
  const { profile, setProfile } = useContext(ProfileContext);
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginModalContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [avatar, setAvatar] = useState("");
  const links = [
    { key: "map", value: "نقشه راه " },
    { key: "contact_us", value: "ارتباط با ما" },
    { key: "/AboutUs", value: " درباره ما" },
    { key: "home", value: "خانه" },
  ];
  const getIn = (
    <div className="flex gap-3 xxl:gap-5 pr-6 xxl:pr-10">
      <Link
        to="/signUp"
        className={
          styles.sign_up +
          " flex items-center py-[0.5rem] px-[0.75rem] xxl:px-[1.5rem] xxl:py-[1rem] text-[0.75rem] xxl:text-[1rem] xxl:leading-[0.5rem]"
        }
      >
        ثبت نام
      </Link>
      <button
        onClick={() => setIsOpenLogin(true)}
        className={
          styles.login +
          " py-[0.5rem] px-[0.75rem] xxl:px-[1.5rem] xxl:py-[1rem] text-[1rem] xxl:text-[1.25rem] xxl:leading-[0.5rem]"
        }
      >
        ورود
      </button>
    </div>
  );
  const profile1 = (name, profileUrl) => {
    return (
      <Link to="/dashboard" className="pr-6 xxl:pr-10">
        <div className="flex gap-3">
          <div className=" rounded-[50%] overflow-hidden">
            <img
              src={avatar}
              alt="profile pic"
              className="w-[30px] xl:w-[40px] xxl:w-[50px] h-[30px] xl:h-[40px] xxl:h-[50px]"
            />
          </div>
          <div className={styles.prof_parent + " gap-1"}>
            <span className="text-sm font-medium xl:text-base xxl:text-xl text-[#4D7AD2]">
              {fname} {lname}
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
          <hr className="bg-[#4D7AD2] border-0 h-[1px]" />
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
    let idu = localStorage.getItem("id");

    if (value !== undefined && value !== null) {
      setIsIn(true);
      axios
        .get(`http://127.0.0.1:8000/accounts/api/v1/profile/${idu}/`, {
          headers: {
            Authorization: `JWT ${value}`,
          },
        })
        .then((r) => {
          setFname(r.data.first_name);
          setLname(r.data.last_name);
          setAvatar(r.data.avatar);
          setProfile(r.data);
        });
    }
  }, [isIn]);

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
          {isIn ? profile1("امیلی جین استون", ``) : getIn}
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
