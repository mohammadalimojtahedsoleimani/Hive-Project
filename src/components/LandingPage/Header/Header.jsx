import styles from "./Header.module.css";
import HeaderRightShape_1 from "../../../images/LandingPage/header_right_shape_1.svg";
import HeaderRightShape_2 from "../../../images/LandingPage/header_right_shape_2.svg";
import HeaderLeftShape from "../../../images/LandingPage/header_left_shape.svg";
import { useContext } from "react";
import { LoginModalContext } from "../../../context/LoginContext";
import Login from "../../modal/Login/Login";

const BUTTON_WRAPPER_LOGIN_STYLES = {
  position: "relative",
  // zIndex : 1 ,
};
const Header = (props) => {
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginModalContext);
  return (
    <section
      className={
        styles.parent + " pt-[110px] xl:pt-[140px] xxl:pt-[220px] xxl:pb-16"
      }
    >
      {/* top */}
      <div
        className={
          styles.top +
          " text-[30px] xl:text-[50px] xxl:text-[75px] xxl:leading-[160px] font-IRANNastaliqh "
        }
      >
        بنی آدم اعضای یک، دیگرند که در آفر ینش ز یک گوهرند
        <br />
        چو عضوی به درد آورد روزگار دگر عضو ها را نماند قرار
      </div>
      {/* bottom */}
      <div className="pt-16 pb-3 xxl:pb-6">
        <div
          className={
            styles.bottom_text + " xxl:text-[22px] xxl:leading-[30px] xxl:mb-6"
          }
        >
          هایو، اجتمایی برای گسترش نیکوکاری
        </div>
        <div className={styles.enter_parent + " gap-6 pt-4"}>
          <div style={BUTTON_WRAPPER_LOGIN_STYLES}>
            <button
              onClick={() => setIsOpenLogin(true)}
              className={
                styles.login +
                " p-[1rem] xxl:p-[2rem] text-[0.75rem] xxl:text-[1.25rem] xxl:leading-[0.5rem]"
              }
            >
              وارد شو
            </button>
            <Login
              open={isOpenLogin}
              closeModal={() => setIsOpenLogin(false)}
            ></Login>
          </div>
          <button
            className={
              styles.sign_up +
              " p-[1rem] xxl:p-[2rem] text-[0.75rem] xxl:text-[1.25rem] xxl:leading-[0.5rem]"
            }
          >
            ثبت نام کن
          </button>
        </div>
      </div>
      <img src={HeaderRightShape_1} alt="" className={styles.shape_1} />
      <img src={HeaderRightShape_2} alt="" className={styles.shape_2} />
      <img src={HeaderLeftShape} alt="" className={styles.shape_3} />
    </section>
  );
};

export default Header;
