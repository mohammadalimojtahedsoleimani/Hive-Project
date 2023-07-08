import Twitter from "../../..//images/common/Footer/twitter.svg";
import Instagram from "../../..//images/common/Footer/insta.svg";
import Pintrest from "../../..//images/common/Footer/pintrest.svg";
import Youtube from "../../..//images/common/Footer/youtube.svg";
import Logo from "../../../images/common/Footer/logo.png";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="bg-dash-pattern text-[#AFAFAF]">
      <div className="flex px-[7rem] xxl:px-[14rem] py-[3rem] xxl:py-[6rem]">
        <div className="flex-1">
          <h3 className="text-white font-bold text-[10px] xxl:text-[16px] mb-4 xxl:mb-8">
            خبرنامه ما
          </h3>
          <div className="my-4 xxl:my-8">
            <div>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                className="rounded-r-[10px] w-40 xxl:w-64 text-[9px] xxl:text-[14px] p-2 xxl:p-3 h-8 xxl:h-12"
              />
              <button className="bg-[#4D7AD2] text-white rounded-l-[10px] text-[10px] xxl:text-[16px] h-8 xxl:h-12 px-2 xxl:px-4">
                عضو شو
              </button>
            </div>
            <span className="text-[#CCCCCC] text-[9px] xxl:text-[14px]">
              ایمیل شما پیش ما محفوظ است نگران نباشید!
            </span>
          </div>
          <div>
            <h3 className="text-white text-[10px] xxl:text-[16px]">
              ما را در شبکه های اجتماعی دنبال کنید
            </h3>
            <div className="flex gap-2 xxl:gap-4 mt-1 xxl:mt-3">
              <Link to={"#"}>
                <img src={Youtube} alt="" />
              </Link>
              <Link to={"#"}>
                <img src={Pintrest} alt="" />
              </Link>
              <Link to={"#"}>
                <img src={Instagram} alt="" />
              </Link>
              <Link to={"#"}>
                <img src={Twitter} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 flex">
          <div className="flex-1">
            <h3 className="text-white text-[10px] xxl:text-[16px] mb-4 xxl:mb-8">
              لینک های سریع
            </h3>
            <ul>
              <li className="text-[10px] xxl:text-[16px] mb-3 xxl:mb-5">
                خانه
              </li>
              <li className="text-[10px] xxl:text-[16px] mb-3 xxl:mb-5">
                درباره ما
              </li>
              <li className="text-[10px] xxl:text-[16px] mb-3 xxl:mb-5">
                چه اتفاقی می افتند ؟
              </li>
              <li className="text-[10px] xxl:text-[16px] mb-3 xxl:mb-5">
                هایو چیست
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-white text-[10px] xxl:text-[16px] mb-4 xxl:mb-8">
              اطلاعات کاربری
            </h3>
            <ul>
              <li className="text-[10px] xxl:text-[16px] mb-3 xxl:mb-5">
                ورود
              </li>
              <li className="text-[10px] xxl:text-[16px]">ثبت نام</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 text-left">
          <div className="flex items-center justify-end">
            <span className=" text-white font-IrishGrover text-[30px] xxl:text-[39px]">
              Hive
            </span>
            <img src={Logo} alt="" className=" w-[60px] xxl:w-[83px]" />
          </div>
          <p className="text-[#EEEEEE] text-[10px] xxl:text-[16px]">
            انقلابی در اعمال خیریه و کمک به <br /> نیازمندان با ما در هایو رخ
            میدهد.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="h-[1px] w-[75%] text-center bg-[#454545]"></div>
        <div className=" py-2 xxl:py-4">
          <span className="text-[#888888] text-[14px] font-Nunito">
            Designed By Hive Developer Team
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
