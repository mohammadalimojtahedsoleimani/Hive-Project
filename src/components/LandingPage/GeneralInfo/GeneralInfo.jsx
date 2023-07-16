import Idea from "../../../images/LandingPage/idea.svg";
import Sheild from "../../../images/LandingPage/sheild.svg";
import Help from "../../../images/LandingPage/general_info_image.png";
import styles from "./GeneralInfo.module.css";

const GeneralInfo = (props) => {
  const list_style =
    "list-disc mr-[15px] text-[14px]  mt-[15px]  mb-[15px] xxl:mr-[20px] xxl:text-[17px]  xxl:mt-[20px]  xxl:mb-[20px]";

  return (
    <section className="flex bg-[#5E86FF]  px-[5rem] xxl:px-[10rem] py-[5.5rem] xxl:py-[6rem]">
      <div className="flex-1 pl-[5rem] xxl:pl-[8rem]">
        <h3 className={styles.title_text + " text-[18px] xxl:text-[21px]"}>
          به نیکوکاری خوش آمدید{" "}
          <hr className=" bg-gray-400 inline-block mr-4 m-1 h-[1px] w-[50px] xxl:w-[66px]" />
        </h3>
        <h2
          className={
            styles.title_text +
            " text-[34px] xxl:text-[39px] my-[1.4rem] xxl:my-[2rem]"
          }
        >
          بیاید کنار یکدیگر باشیم
          <br />
          تا تفاوت را ایجاد کنیم
        </h2>
        <p className={styles.sub_text + " text-[17px]"}>
          روزانه تعداد زیادی از انسان ها در اثر گرسنگی جان خود را از دست می
          دهند. عده زیادی از هم وطنانمان با سایه فقر، به سختی زندگی خود را می
          گذرانند، فرزندانمان در مناطق دو افتاده از امکانات رفاهی، تحصیلی و حتی
          خوراک محروم مانده اند، زندانیانی که به دلیل بدهی های مالی از خانواده
          خود دور مانده اند و ... مثال هایی از انسان های شریفی هستند که به کمک
          ما نیازمندند 🤝
        </p>
        <div className="flex gap-5 xxl:gap-8 mt-[2.5rem] xxl:mt-[4rem] xxl:pl-[4rem] pr-3 xxl:pr-5">
          <div className="bg-[#EDEFF7] rounded-lg flex-1 px-[0.4rem] xxl:px-[0.7rem] py-[0.6rem] xxl:p-[1rem]">
            <div className=" flex flex-1 gap-[1.4rem] xxl:gap-[1.7rem] mb-4 xxl:mb-6">
              <img src={Sheild} alt="" />
              <span className={styles.sub_title + " xxl:text-[22px]"}>
                وظیفه ما
              </span>
            </div>
            <p className=" xxl:text-[13px] pr-1 xxl:pr-3">
              اگر افرادی که نیازمند کمک هستند را می شناسید، ثبت نام کرده و آگهی
              کنید ما شما را به خیران معرفی خواهیم کرد{" "}
            </p>
          </div>
          <div className="bg-[#EDEFF7] rounded-lg flex-1 px-[0.4rem] xxl:px-[0.7rem] py-[0.6rem] xxl:p-[1rem]">
            <div className=" flex flex-1 gap-[1.4rem] xxl:gap-[1.7rem] mb-4 xxl:mb-6">
              <img src={Idea} alt="" />
              <span className={styles.sub_title + " xxl:text-[22px]"}>
                دیدگاه ما
              </span>
            </div>
            <p className=" xxl:text-[13px] pr-1 xxl:pr-3">
              حفظ حرمت و جایگاه نیازمندان و همچنین ایجاد شفافیت و امینت مراودات
              مالی اصل ماست{" "}
            </p>
          </div>
        </div>
        <div className="text-right py-7 xxl:py-10">
          <div className="inline-block  py-3 xxl:py-5">
            <div className="flex justify-between">
              <span className="text-[#F0F0F0] text-[18px] xxl:text-[20px] font-medium">
                کمک های مالی
              </span>
              <span className="text-[19px] xxl:text-[21px] font-bold">75%</span>
            </div>
            <div className="bg-[#EDEFF7] rounded-[8px] h-2 xxl:h-4 w-[25rem] xxl:w-[42rem]">
              <hr className="bg-[#4D7AD2] rounded-[8px] h-full w-[75%] border-t-0" />
            </div>
          </div>
          <div className="inline-block xxl:py-5">
            <div className="flex justify-between">
              <span className="text-[#F0F0F0] text-[18px] xxl:text-[20px] font-medium">
                کمک پزشکی
              </span>
              <span className="text-[19px] xxl:text-[21px] font-bold">90%</span>
            </div>
            <div className="bg-[#EDEFF7] rounded-[8px] h-2 xxl:h-4 w-[25rem] xxl:w-[42rem]">
              <hr className="bg-[#4D7AD2] rounded-[8px] h-full w-[90%] border-t-0" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.left + " pr-[2rem] xxl:pr-[3rem] "}>
        <div
          className={
            styles.inner_parent +
            " w-[360px] h-[380px] border-[8px] xxl:w-[487px] xxl:h-[503px] xxl:border-[15px]"
          }
        >
          <img src={Help} className={styles.image} alt="" />
          <div className={styles.parent + "  border-[8px] xxl:border-[15px]"}>
            <ul className={styles.ul_parent + " p-[10px] xxl:p-[15px]"}>
              <li className={list_style}>
                {" "}
                <span className=" text-[#219D80]">
                  {" "}
                  با هم می توانیم آینده را تغییر دهیم
                </span>{" "}
              </li>
              <li className={list_style}>
                {" "}
                <span className=" text-[#555555]">
                  کودکانی که می توانیم حمایتشان کنیم
                </span>{" "}
              </li>
              <li className={list_style}>
                {" "}
                <span className=" text-[#555555]">
                  نیازهایشان را برآورده کنیم تا از سختی زندگی دور بمانند
                </span>{" "}
              </li>
              <li className={list_style}>
                {" "}
                <span className=" text-[#555555]">
                  ما هم اکنون این کار را شروع کرده ایم
                </span>{" "}
              </li>
              <li className={list_style}>
                {" "}
                <span className=" text-[#555555]">
                  کودکان را از جنگ، قحطی و فقر دور نگه داریم
                </span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralInfo;
