import React, { useContext, useEffect } from "react";
import styles from "./MobileNavbar.module.css";
import Menu from "../../../assets/images/common/Navbar/menu.svg";
import Profile from "../../../assets/images/common/Navbar/profile.png";
import Logo from "../../../assets/images/common/Navbar/logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DakhelContext } from "../../../context/DakhelContext";

import { notify } from "../../../helper/toast";
import { LoginModalContext } from "../../../context/LoginContext";

const MobileNavbar = ({ active, dark }) => {
  const { isIn, setIsIn } = useContext(DakhelContext);
  const { isOpenLogin } = useContext(LoginModalContext);
  const links = [
    { key: "map", value: "نقشه راه " },
    // { key: "contact_us", value: "ارتباط با ما" },
    { key: "about_us", value: " درباره ما" },
    { key: "home", value: "خانه" },
  ];
  const getIn = (
    <div className="">
      <button className={styles.sign_up}>ثبت نام</button>
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
      <Link to="/dashboard/general" className="pr-6 xxl:pr-10">
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
    return (
      <div>
        <Link className={styles.link} to={item.key}>
          {item.value}
        </Link>
        {active === item.key && (
          <hr className="bg-[#4D7AD2] border-0 h-[1px]" />
        )}
      </div>
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
    <nav className={styles.navbar}>
      <div
        className={styles.inner_parent}
        style={{ backgroundColor: dark ? "#252A34" : "white" }}
      >
        {/* right */}
        <div className={styles.right}>
          <img src={Menu} alt="" className={styles.menu_button} />
          {/* {isIn
            ? profile(
                "امیلی جین استون",
                "http://127.0.0.1:8000/media/ads/FxunEVSWcAATZR1.jpg"
              )
            : getIn} */}
        </div>
        {/* center */}
        <div className={styles.center}>
          {links.map((item) => isActive(item))}
        </div>
        {/* left */}
        <div className={styles.left}>
          <img src={Logo} className={styles.logo} alt="logo" />
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default MobileNavbar;
