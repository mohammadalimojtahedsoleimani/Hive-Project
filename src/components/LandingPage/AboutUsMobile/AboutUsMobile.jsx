import Image_1 from "../../../assets/images/LandingPage/about_us_image_1.png";
import Image_2 from "../../../assets/images/LandingPage/about_us_image_2.png";
import styles from "./AboutUsMobile.module.css";

const AboutUsMobile = (props) => {
  return (
    <section className={styles.parent + " bg-[#5E86FF] relative flex"}>
      <div className="relative flex-1">
        <h2 className="font-bold text-[#E8E8E8] text-[25px] xxl:text-[36px]">
          درباره ما
        </h2>
        <p className=" text-white my-1 text-[15px] xxl:text-[22px] xxl:my-3">
          هایو، اجتمایی از نیکوکاران و نیازمندان را گردهم آورده تا با ایجاد
          فضایی امن و شفاف از نظر مالی، فرآیند کمک گیری و کمک رسانی را هر چه
          بیشتر تسهیل بخشد.
        </p>
        <div className={styles.left}>
          <div
            className={styles.inner_parent + " border-[8px] xxl:border-[15px]"}
          >
            <img src={Image_1} className={styles.image} alt="" />
            <div
              className={
                styles.Image_2_parent + " border-[8px] xxl:border-[15px]"
              }
            >
              <img src={Image_2} className={styles.image} alt="" />
            </div>
          </div>
        </div>
        <h2
          className={
            styles.bottom_of_pic +
            " text-white m-7 font-bold xxl:m-14 xxl:text-[22px]"
          }
        >
          &#9774; ️️امید است روزی که نیازمندی ای نباشد جز مهر و عشق 🕊
        </h2>
        <p className=" text-white xxl:text-[22px]">
          مشاهده صورت حساب مالی هر آگهی، احراز هویت کمک گیران در عین محفوظ ماندن
          هویت آنان برای حفظ شان و منزلت این عزیزان، و همچنین امکان یافتن
          نیازمندان با جست و جوی پیشرفته، از دیگر امکانات هایو می باشد 🔒
        </p>
        <button
          className={
            styles.btn +
            " text-[13px] bottom-[2rem] left-2 py-2 px-4 xxl:bottom-[0rem] xxl:left-4 xxl:py-3 xxl:px-6 xxl:text-[19px]"
          }
        >
          بیشتر بخوانید
        </button>
      </div>
    </section>
  );
};

export default AboutUsMobile;
