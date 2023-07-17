import styles from "./HeaderMobile.module.css";
import { useContext } from "react";
import { LoginModalContext } from "../../../context/LoginContext";
import Login from "../../modal/Login/Login";
import { Link } from "react-router-dom";

const BUTTON_WRAPPER_LOGIN_STYLES = {
  position: "relative",
};
const Header = (props) => {
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginModalContext);
  return (
    <section className={styles.parent}>
      <div className={styles.background_div}></div>
      {/* top */}
      <div className={styles.inner_parent}>
        <div className={styles.top}>
          <div className={styles.beit_1}>
            <div>بنی آدم اعضای یک، دیگرند</div>
            <div>که در آفر ینش ز یک گوهرند</div>
          </div>
          <div className={styles.beit_2}>
            <div>چو عضوی به درد آورد روزگار</div>
            <div> دگر عضو ها را نماند قرار</div>
          </div>
        </div>
        {/* bottom */}
        <div className={styles.bottom}>
          <div className={styles.bottom_text}>
            هایو، اجتمایی برای گسترش نیکوکاری
          </div>
          <div className={styles.enter_parent}>
            <div style={BUTTON_WRAPPER_LOGIN_STYLES}>
              <button
                onClick={() => setIsOpenLogin(true)}
                className={styles.login}
              >
                وارد شو
              </button>
              <Login
                open={isOpenLogin}
                closeModal={() => setIsOpenLogin(false)}
              ></Login>
            </div>
            <Link to="signUp" className={styles.sign_up}>
              ثبت نام کن
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
