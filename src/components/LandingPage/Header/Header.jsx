import styles from "./Header.module.css";
import { useContext } from "react";
import { LoginModalContext } from "../../../context/LoginContext";
import Login from "../../modal/Login/Login";
import { Link } from "react-router-dom";

const BUTTON_WRAPPER_LOGIN_STYLES = {
  position: "relative",
  // zIndex : 1 ,
};
const Header = (props) => {
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginModalContext);
  return (
    <section
      className={
        styles.parent +
        " pt-[150px] xl:pt-[190px] xxl:pt-[230px] min-h-[1000px] xl:min-h-[1200px] xxl:min-h-[1500px] pb-10 xxl:pb-24"
      }
    >
      {/* top */}
      <div
        className={
          styles.top +
          " font-[700] text-[45px] xl:text-[50px] xxl:text-[55px] xxl:leading-[160px] font-IRANNastaliqh "
        }
      >
        بنی آدم اعضای یک، دیگرند &nbsp;&nbsp;&nbsp;&nbsp;که در آفر ینش ز یک
        گوهرند
        <br />
        چو عضوی به درد آورد روزگار &nbsp;&nbsp;&nbsp;&nbsp;دگر عضو ها را نماند
        قرار
      </div>
      {/* bottom */}
      <div className="pt-16 pb-3 xxl:pb-6">
        <div
          className={
            styles.bottom_text +
            " text-center text-[30px] xxl:text-[36px] xxl:leading-[30px] xxl:mb-6"
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
                " py-[0.75rem] px-[1rem] xxl:px-[2rem] xxl:py-[1.25rem] text-[1rem] xxl:text-[1.25rem] xxl:leading-[0.5rem]"
              }
            >
              وارد شو
            </button>
            <Login
              open={isOpenLogin}
              closeModal={() => setIsOpenLogin(false)}
            ></Login>
          </div>
          <Link
            to="signUp"
            className={
              styles.sign_up +
              " py-[0.75rem] px-[1rem] xxl:px-[2rem] xxl:py-[1.25rem] text-[1rem] xxl:text-[1.25rem] xxl:leading-[0.5rem]"
            }
          >
            ثبت نام کن
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
