import Locks from "../../assets/images/EditPasswordPage/locks.png";
import Logo from "../../assets/images/SignUp/logo.svg";
import Twitter from "../../assets/images/SignUp/links/twitter.svg";
import Insta from "../../assets/images/SignUp/links/insta.svg";
import Pinterest from "../../assets/images/SignUp/links/pinterest.svg";
import Youtube from "../../assets/images/SignUp/links/youtube.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { notify } from "../../helper/toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { LoginModalContext } from "../../context/LoginContext";
import BASE_URL, { ACCOUNTS } from "../../Config/ApiConfig";

const EditPasswordPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpenLogin, setIsOpenLogin } = useContext(LoginModalContext);
  const { pathname } = location;
  const segments = pathname.split("/");
  const delay = 1000;

  const [data, setData] = useState({
    password: "",
    token: segments[2],
    uidb64: segments[1],
  });
  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const submitHandler = (e) => {
    console.log(data.uidb64);
    console.log(data.token);
    e.preventDefault();
    axios
      .patch(BASE_URL + ACCOUNTS.PASSWORD_RESET, data)
      .then((r) => {
        notify("تغییر رمز عبور با موفقیت انجام شد", "success");
        const timer = setTimeout(() => {
          navigate("/");
          window.location.reload();
          setIsOpenLogin(true);
        }, delay);
      })
      .catch((er) => {
        notify("پسورد معتبر وارد کنید", "er");
      });
  };

  const inputStyle =
    "text-[#A3A3A3] bg-[#F3F2F2] rounded-lg text-[17px] xxl:text-[19px] p-[0.4rem] xxl:p-[0.9rem] mb-[0.9rem] xxl:mb-[1.5rem]";
  const form = (
    <form className="flex flex-col pl-[4rem]" onSubmit={submitHandler}>
      <div className="flex flex-col mb-8 xxl:mb-11">
        <label
          htmlFor=""
          className="font-[500] text-[28px] xxl:text-[32px] mb-3 xxl:mb-5"
        >
          رمز عبور جدید :
        </label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={changeHandler}
          className={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-[#4D7AD2] font-[700] rounded-lg text-[18px] xxl:text-[21px] py-[0.8rem] xxl:py-[1.2rem] my-6 xxl:my-9"
      >
        بررسی تغییرات
      </button>
    </form>
  );

  return (
    <div
      className="page min-h-[100vh] flex"
      style={{
        backgroundImage:
          "linear-gradient(100deg, rgb(77, 122, 210) 44%, white 44.1%)",
      }}
    >
      <div className="right flex-1 flex flex-col items-stretch justify-center relative bottom-3 xxl:bottom-4 pl-[13vw] pr-[10vw] min-h-[100vh]">
        <div className="right_parent z-[2] pt-[4.5rem] relative bottom-8 xxl:bottom-16">
          <div className="form_parent">{form}</div>
        </div>
      </div>
      <div className="left flex-1 flex flex-col relative min-h-[100vh]">
        <div className="flex-[2]"></div>
        <div className="flex-[5] flex flex-col content-between px-9 xxl:px-11">
          <div className="fixed flex top-8 xxl:top-12 left-10 xxl:left-14">
            <span className=" text-[white] font-IrishGrover  text-[34px] xxl:text-[39px]">
              Hive
            </span>
            <img src={Logo} alt="" className="z-[-1] w-[70px] xxl:w-[82px]" />
          </div>
          <div className="flex content-end">
            <img src={Locks} alt="" className="w-[40vw]" />
          </div>
          <div className="fixed icons bottom-28 xxl:bottom-36 left-24 xxl:left-28">
            <ul className="flex gap-7 xxl:gap-16" dir="ltr">
              <li>
                <Link to={""}>
                  {" "}
                  <img
                    src={Twitter}
                    alt=""
                    className="w-[34px] xxl:w-[40px]"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <img
                    src={Insta}
                    alt=""
                    className="w-[34px] xxl:w-[40px]"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <img
                    src={Pinterest}
                    alt=""
                    className="w-[34px] xxl:w-[40px]"
                  />{" "}
                </Link>
              </li>
              <li>
                <Link to={""}>
                  {" "}
                  <img
                    src={Youtube}
                    alt=""
                    className="w-[34px] xxl:w-[40px]"
                  />{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditPasswordPage;