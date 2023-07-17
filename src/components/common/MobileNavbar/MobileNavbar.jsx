import React, { useContext, useEffect } from "react";
import styles from "./MobileNavbar.module.css";
import Menu from "../../../assets/images/common/Navbar/menu.svg";
import Logo from "../../../assets/images/common/Navbar/logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DakhelContext } from "../../../context/DakhelContext";

import { LoginModalContext } from "../../../context/LoginContext";

const MobileNavbar = ({ active, dark }) => {
  const { isIn, setIsIn } = useContext(DakhelContext);
  const links = [
    { key: "map", value: "نقشه راه " },
    { key: "about_us", value: " درباره ما" },
    { key: "home", value: "خانه" },
  ];

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

  return (
    <nav className={styles.navbar}>
      <div
        className={styles.inner_parent}
        style={{ backgroundColor: dark ? "#252A34" : "white" }}
      >
        {/* right */}
        <div className={styles.right}>
          <img src={Menu} alt="" className={styles.menu_button} />
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
