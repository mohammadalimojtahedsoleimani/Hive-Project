import React from "react";
import styles from "./Navbar.module.css";
import Search from "../../../images/common/Navbar/search.svg";
import Profile from "../../../images/common/Navbar/profile.png";
import DownArrow from "../../../images/common/Navbar/down_arrow.svg";
import Logo from "../../../images/common/Navbar/logo.svg";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const links = [
    { key: "home", value: "خانه" },
    { key: "about_us", value: " درباره ما" },
    { key: "pages", value: "صفحات " },
    { key: "web_texts", value: "وب نوشت ها" },
  ];
  return (
    <nav className={styles.navbar + " px-16 xl:px-28 xxl:px-[17rem] top-8"}>
      <div className="flex w-full py-2   bg-white rounded-[71px] px-12 xl:px-17 xxl:px-[5rem] gap-5">
        {/* right */}
        <div className={styles.right + " gap-2"}>
          <div>
            <img
              src={Search}
              alt=""
              className="w-[2rem] xl:w-[2.5rem] xxl:w-[3rem] h-[2rem] xl:h-[2.5rem] xxl:h-[3rem]"
            />
          </div>
          <div className="flex gap-3">
            <div>
              <img
                src={Profile}
                alt="profile pic"
                className="w-[30px] xl:w-[40px] xxl:w-[50px] h-[30px] xl:h-[40px] xxl:h-[50px]"
              />
            </div>
            <div className={styles.prof_parent + " gap-1"}>
              <img src={DownArrow} alt="down arrow" className="w-4 h-2 mt-3" />
              <span className="text-sm xl:text-base xxl:text-xl font-medium text-secondary-500  font-IRANSans">
                محمدرضایاغی گر
              </span>
            </div>
          </div>
        </div>
        {/* center */}
        <div className={styles.center + " gap-6"}>
          {links.map((item) => (
            <Link
              className="text-xs xl:text-sm xxl:text-lg font-medium text-secondary-500 font-IRANSans"
              to={item.key}
            >
              {item.value}
            </Link>
          ))}
        </div>
        {/* left */}
        <div className={styles.left}>
          <span className={styles.brand_name + " xxl:text-[31px]"}>Hive</span>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
