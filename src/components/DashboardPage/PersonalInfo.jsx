import EditIcon from "../../images/DashboardPage/edit.svg";
import SampleProfile from "../../images/DashboardPage/sample_profile.png";

import { useContext , useEffect , useState } from "react";
import axios from "axios";
import { notify } from "../../helper/toast";
import { ToastContainer } from "react-toastify";
import { DakhelContext } from "../../context/DakhelContext";

const PersonalInfo = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    avatar: null,
  });
  let value;
  let id;
  const { isIn , setIsIn } = useContext ( DakhelContext );
  const delay = 1000;
  // functions
  const handleImageChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.files[0] });
  };
  const [profPic, setProfPic] = useState("");

  useEffect(() => {
    value = localStorage.getItem("token");
    id = localStorage.getItem("id");
    axios
      .get(`http://127.0.0.1:8000/accounts/api/v1/profile/${id}/`, {
        headers: {
          Authorization: `JWT ${value}`,
        },
      })
      .then((r) => {
        setProfPic(r.data.avatar);
      });
  }, [isIn]);
  const changeHandler = (event) => {
    // setData()
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const inputStyle =
    "text-[#777777] bg-[#f3f3f3b7] text-[16px] xxl:text-[20px] p-[0.3rem] py-[0.5rem] xxl:p-[0.6rem] xxl:py-[0.9rem] rounded-[15px] font-[700]";
  const labelStyle =
    "font-[500] text-[20px] xxl:text-[24px] mb-[0.3rem] xxl:mb-[0.6rem] mt-[0.55rem] xxl:mt-[0.8rem]";
  const inputShadowBorder = {
    boxShadow: "0px 10px 7px -6px rgba(112,112,112,1)",
    border: "solid 3px #e6e6e6d2",
  };
  const handleDateChange = (e) => {
    e.preventDefault();
    if(!data.fname || !data.lname) {
      notify('لطفا همه ورودی ها را پر کنید'    , 'er')
      return;
    }

    value = localStorage.getItem("token");
    id = localStorage.getItem("id");

    console.log(value);

    const formData = new FormData();
    formData.append("first_name", data.fname);
    formData.append("last_name", data.lname);
    if (data.avatar) {
      formData.append("avatar", data.avatar, data.avatar.name);
    }

    axios
      .patch(`http://127.0.0.1:8000/accounts/api/v1/profile/${id}/`, formData, {
        headers: {
          Authorization: `JWT ${value}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        notify("تغییرات با موفقیت ثبت شد.", "success");
        const timer = setTimeout ( () => {
          window.location.reload ();


        } , delay );


      })
      .catch((error) => {
        console.log("the error: ", error.response);
      });

    console.log(formData);
  };

  return (
    <div className="flex items-start pt-[14vh] w-full h-full">
      <form className="flex flex-col w-full pl-[7vw] pr-[5vw]" onSubmit={handleDateChange}>
        <div className="flex flex-col gap-[8vh]">
          {/* <div>
            <img src={SampleProfile} alt="" />
          </div> */}
          <div className="flex items-center justify-start">
            <input
              type="file"
              accept=".png, .JPG, .jpeg"
              className="input_field"
              hidden
              // onChange={handleImageChange}
              onChange={handleImageChange}
              name="avatar"
              // onChange={ ( { target : { files } } ) => {
              //     if ( files[ 0 ] ) {
              //         setFileData ( files[ 0 ] );
              //     }
              // } }
            />
            <div
              className="flex justify-start items-center"
              // style={{
              //   border: "1px solid transparent",
              //   borderImage:
              //     "linear-gradient(to bottom, black 5px, transparent 5px) 1",
              // }}
              onClick={() => document.querySelector(".input_field").click()}
            >
              <img
                src={EditIcon}
                alt=""
                className="w-[0.9rem] xxl:w-[1.5rem] mt-5 xxl:mt-7"
              />
              <img
                className="rounded-[50%] w-16"
                src={profPic}
                alt="upload button"
              />
            </div>
          </div>
          <div>
            <div className="flex">
              <div className="flex flex-col flex-[0.7]">
                <label htmlFor="" className={labelStyle}>
                  نام
                </label>
                <input
                  className={inputStyle + " w-[75%]"}
                  type="text"
                  style={inputShadowBorder}
                  onChange={changeHandler}
                  name="fname"
                  id="fname"
                  value={data.fname}
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
                  className={inputStyle + " w-[75%]"}
                  type="text"
                  style={inputShadowBorder}
                  onChange={changeHandler}
                  name="lname"
                  id="lname"
                  value={data.lname}
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
            {/* <div className="flex flex-col mt-[0.5rem] xxl:mt-[1rem] relative">
          <label htmlFor="" className={labelStyle}>
            ایمیل
          </label>
          <input
            className={inputStyle + " w-[60%]"}
            type="emial"
            style={inputShadowBorder}
          />
        </div> */}
            <div className="flex mt-[0.5rem] xxl:mt-[1rem]">
              <div className="flex flex-col flex-[0.7] relative">
                <label htmlFor="" className={labelStyle}>
                  شماره همراه
                </label>
                <input
                  className={inputStyle + " w-[50%]"}
                  type="tel"
                  style={inputShadowBorder}
                />
                <div className=" w-[50%] relative">
                  <img
                    src={EditIcon}
                    alt=""
                    className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
                  />
                </div>
              </div>
              {/* <div className="relative flex flex-col flex-1">
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
          </div> */}
            </div>
            <div className="flex mt-[0.5rem] xxl:mt-[1rem]">
              {/* <div className="flex flex-col flex-[0.7] relative">
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
          </div> */}
              <div className="relative flex flex-col flex-1 w-[60%]">
                <label htmlFor="" className={labelStyle}>
                  شماره حساب
                </label>
                <input
                  className={inputStyle + " w-[60%]"}
                  type="text"
                  style={inputShadowBorder}
                />
                <div className=" w-[60%] relative">
                  <img
                    src={EditIcon}
                    alt=""
                    className="absolute bottom-4 left-3 w-[0.9rem] xxl:w-[1.5rem]"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[9vh]">
              <button
             type='submit'
                className="font-[700] text-[19px] xxl:text-[21px] text-white bg-[#4D7AD2] rounded-lg px-[0.8rem] xxl:px-[0.5rem] py-[1rem] xxl:py-[0.7rem] relative left-[5vw]"
              >
                انجام تغییرات
              </button>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default PersonalInfo;
