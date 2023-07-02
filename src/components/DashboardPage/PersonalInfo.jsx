import EditIcon from "../../images/DashboardPage/edit.svg";
const PersonalInfo = () => {
  const inputStyle =
    "text-[#777777] bg-[#f3f3f3b7] text-[16px] xxl:text-[20px] p-[0.3rem] py-[0.5rem] xxl:p-[0.6rem] xxl:py-[0.9rem] rounded-[15px] font-[700] w-[75%]";
  const labelStyle =
    "font-[500] text-[20px] xxl:text-[24px] mb-[0.3rem] xxl:mb-[0.6rem]";
  const inputShadowBorder = {
    boxShadow: "0px 10px 7px -6px rgba(112,112,112,1)",
    border: "solid 3px #e6e6e6d2",
  };
  return (
    <div className="flex items-center w-full h-full">
      <form
        className="flex flex-col w-full pl-[2rem] xxl:pl-[3rem] pr-[2.5rem] xxl:pr-[3rem]"
        action=""
      >
        <div className="flex">
          <div className="flex flex-col flex-[0.7]">
            <label htmlFor="" className={labelStyle}>
              نام
            </label>
            <input
              className={inputStyle}
              type="text"
              style={inputShadowBorder}
            />
            <div className=" w-[75%] relative">
              <img
                src={EditIcon}
                alt=""
                className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
              />
            </div>
          </div>
          <div className="relative flex flex-col flex-1">
            <label htmlFor="" className={labelStyle}>
              نام خانوادگی
            </label>
            <input
              className={inputStyle}
              type="text"
              style={inputShadowBorder}
            />

            <div className=" w-[75%] relative">
              <img
                src={EditIcon}
                alt=""
                className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[0.5rem] xxl:mt-[1rem] relative">
          <label htmlFor="" className={labelStyle}>
            ایمیل
          </label>
          <input
            className={inputStyle + " w-[60%]"}
            type="emial"
            style={inputShadowBorder}
          />
        </div>
        <div className="flex mt-[0.5rem] xxl:mt-[1rem]">
          <div className="flex flex-col flex-[0.7] relative">
            <label htmlFor="" className={labelStyle}>
              شماره همراه
            </label>
            <input
              className={inputStyle}
              type="tel"
              style={inputShadowBorder}
            />
            <div className=" w-[75%] relative">
              <img
                src={EditIcon}
                alt=""
                className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
              />
            </div>
          </div>
          <div className="relative flex flex-col flex-1">
            <label htmlFor="" className={labelStyle}>
              کد ملی
            </label>
            <input
              className={inputStyle}
              type="text"
              style={inputShadowBorder}
            />
            <div className=" w-[75%] relative">
              <img
                src={EditIcon}
                alt=""
                className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
              />
            </div>
          </div>
        </div>
        <div className="flex mt-[0.5rem] xxl:mt-[1rem]">
          <div className="flex flex-col flex-[0.7] relative">
            <label htmlFor="" className={labelStyle}>
              رمز عبور
            </label>
            <input
              className={inputStyle}
              type="password"
              style={inputShadowBorder}
            />
            <div className=" w-[75%] relative">
              <img
                src={EditIcon}
                alt=""
                className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
              />
            </div>
          </div>
          <div className="relative flex flex-col flex-1">
            <label htmlFor="" className={labelStyle}>
              شماره حساب
            </label>
            <input
              className={inputStyle}
              type="text"
              style={inputShadowBorder}
            />
            <div className=" w-[75%] relative">
              <img
                src={EditIcon}
                alt=""
                className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
