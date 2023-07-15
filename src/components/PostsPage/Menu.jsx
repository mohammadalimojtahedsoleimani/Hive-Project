import styles from "./Menu.module.css";
import { Fragment, useContext, useEffect, useState } from "react";

import Close from "../../images/PostsPage/close.svg";
import { CatidContext } from "../../context/CatidContext";

const Menu = (props) => {
  const [fullMenu, setFullMenu] = useState(false);
  const [tempCatid, setTempCatid] = useState("");
  const { catid, setCatid } = useContext(CatidContext);

  const closeMenu = () => {
    props.setIsMenuOpen(false);
  };

  const activeStyle = (id) => {
    if (id === tempCatid) {
      return {
        backgroundColor: "rgba(82, 82, 82, 1)",
        color: "white",
      };
    }
  };
  const setFilters = (start, end) => {
    return (
      <div className={styles.inner_parent}>
        {props.categories.slice(start, end).map((category) => (
          <div
            onClick={() => {
              setTempCatid(category.id);
            }}
            className={styles.type + " text-[12px] xxl:text-[15px]"}
            style={activeStyle(category.id)}
          >
            {category.name}
          </div>
        ))}
      </div>
    );
  };
  const renderFilters = () => {
    let result = [];
    let visibleLength = props.categories.length;
    if (props.categories.length >= maxShownNumber) {
      if (!fullMenu) {
        visibleLength = Math.floor(visibleLength / 2);
      }
    }
    for (let i = 0; i < visibleLength; i = i + 3) {
      if (i + 3 < visibleLength) {
        result.push(setFilters(i, i + 3));
      } else {
        result.push(setFilters(i, visibleLength));
      }
    }
    return result;
  };
  useEffect(() => {
    if (tempCatid === "") {
      setCatid("");
    }
  }, [tempCatid]);
  const handleCheckResult = () => {
    setCatid(tempCatid);
    closeMenu();
  };
  const handleReset = () => {
    setTempCatid("");
    closeMenu();
  };
  const maxShownNumber = 12;
  const theMenu = () => {
    return (
      <Fragment>
        <div className={styles.menu_parent}>
          <div className={styles.menu}>
            <div className={styles.top}>
              <span className={styles.top_title}>فیلتر ها</span>
              <img
                src={Close}
                alt="close button"
                onClick={closeMenu}
                className="w-[34px] xxl:w-[38px]"
              />
            </div>
            {/* <hr /> */}
            <div className={styles.center}>
              <h3 className="text-[20px] xxl:text-[23px] font-[500]">
                هدف مورد نظر برای جمع آوری ائانه
              </h3>
              <span
                className={styles.center_note + "  text-[14px] xxl:text-[17px]"}
              >
                یک یا چند مورد را انتخاب کنید
              </span>
              <div className={styles.filters}>{renderFilters()}</div>
              {props.categories.length >= maxShownNumber && (
                <span
                  className={
                    styles.see_more + " text-[9px] xxl:text-[11px] fonr-[200]"
                  }
                  onClick={() => {
                    setFullMenu((e) => {
                      return !e;
                    });
                  }}
                >
                  {fullMenu ? "دیدن موارد کمتر" : "دیدن موارد بیشتر"}
                </span>
              )}
            </div>
            {/* <hr /> */}
            <div className={styles.bottom}>
              <button
                onClick={handleReset}
                className={styles.reset_btn + " text-[16px] xxl:text-[19px]"}
              >
                ریست
              </button>
              <button
                onClick={handleCheckResult}
                className={
                  styles.see_result_btn + " text-[16px] xxl:text-[19px]"
                }
              >
                دیدن نتایج
              </button>
            </div>
          </div>
        </div>
        <div className={styles.background} onClick={closeMenu}></div>
      </Fragment>
    );
  };
  return props.isMenuOpen ? theMenu() : null;
};

export default Menu;
