import Twitter from "../../..//images/common/Footer/twitter.svg";
import Instagram from "../../..//images/common/Footer/insta.svg";
import Pintrest from "../../..//images/common/Footer/pintrest.svg";
import Youtube from "../../..//images/common/Footer/youtube.svg";
import Logo from "../../../images/common/Footer/logo.png";
import styles from "./MobileFooter.module.css";
import { Link } from "react-router-dom";

const MobileFooter = (props) => {
  return (
    <div className="bg-dash-pattern text-[#AFAFAF]">
      <div className={styles.inner_parent}>
        <div className={styles.top}>
          <div className={styles.logo_parent}>
            <span className={styles.brand_name}>Hive</span>
            <img src={Logo} alt="" className={styles.logo} />
          </div>
          <p className={styles.subtitle}>
            انقلابی در اعمال خیریه و کمک به <br /> نیازمندان با ما در هایو رخ
            میدهد.
          </p>
        </div>

        <div className={styles.center}>
          <div className="flex-1">
            <h3 className={styles.title}>اطلاعات کاربری</h3>
            <ul>
              <li className={styles.link}>ورود</li>
              <li className={styles.link}>ثبت نام</li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className={styles.title}>لینک های سریع</h3>
            <ul>
              <li className={styles.link}>خانه</li>
              <li className={styles.link}>درباره ما</li>
              <li className={styles.link}>چه اتفاقی می افتند ؟</li>
              <li className={styles.link}>هایو چیست</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <h3 className={styles.news_station}>خبرنامه ما</h3>
          <div>
            <div className={styles.email_parent}>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className={styles.email_input}
              />
              <button className={styles.submit_button}>عضو شو</button>
            </div>
            <span className={styles.hint}>
              ایمیل شما پیش ما محفوظ است نگران نباشید!
            </span>
          </div>
          <div className={styles.social_media}>
            <h3 className={styles.follow_us}>
              ما را در شبکه های اجتماعی دنبال کنید
            </h3>
            <div className={styles.links}>
              <Link to={"#"}>
                <img src={Youtube} alt="" className={styles.link_icon} />
              </Link>
              <Link to={"#"}>
                <img src={Pintrest} alt="" className={styles.link_icon} />
              </Link>
              <Link to={"#"}>
                <img src={Instagram} alt="" className={styles.link_icon} />
              </Link>
              <Link to={"#"}>
                <img src={Twitter} alt="" className={styles.link_icon} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sign}>
        <div className={styles.seperator}></div>
        <div className={styles.developed_by}>
          Designed By Hive Developer Team
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
