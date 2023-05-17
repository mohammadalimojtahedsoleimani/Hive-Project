import Image_1 from "../../../images/LandingPage/about_us_image_1.png";
import Image_2 from "../../../images/LandingPage/about_us_image_2.png";
import Shape from "../../../images/LandingPage/about_us_shape.png";
import styles from "./AboutUs.module.css";

const AboutUs = (props) => {
  return (
    <section className="flex px-[5rem] xxl:px-[10rem] py-[3rem] xxl:py-[6rem]">
      <div className="relative flex-1">
        <h2 className="font-bold text-[25px] xxl:text-[36px]">درباره ما</h2>
        <p
          className={
            styles.text_1 + " my-1 text-[15px] xxl:text-[22px] xxl:my-3"
          }
        >
          هایو، اجتمایی از نیکوکاران و نیازمندان را گردهم آورده تا با ایجاد
          فضایی امن و شفاف از نظر مالی، فرآیند کمک گیری و کمک رسانی را هر چه
          بیشتر تسهیل بخشد.
        </p>
        <h2 className=" m-7 font-bold xxl:m-14 xxl:text-[22px]">
          &#9774; ️️امید است روزی که نیازمندی ای نباشد جز مهر و عشق 🕊
        </h2>
        <p className=" xxl:text-[22px]">
          مشاهده صورت حساب مالی هر آگهی، احراز هویت کمک گیران در عین محفوظ ماندن
          هویت آنان برای حفظ شان و منزلت این عزیزان، و همچنین امکان یافتن
          نیازمندان با جست و جوی پیشرفته، از دیگر امکانات هایو می باشد 🔒
        </p>
        <button
          className={
            styles.btn +
            " text-[13px] bottom-[2rem] left-2 py-2 px-4 xxl:bottom-[-5rem] xxl:left-4 xxl:py-3 xxl:px-6 xxl:text-[19px]"
          }
        >
          بیشتر بخوانید
        </button>
      </div>
      <div className={styles.left}>
        <div
          className={
            styles.inner_parent +
            " w-[360px] h-[380px] border-[8px] xxl:w-[440px] xxl:h-[450px] xxl:border-[15px]"
          }
        >
          <img src={Image_1} className={styles.image} alt="" />
          <div
            className={
              styles.Image_2_parent +
              " w-[270px] h-[280px] border-[8px] xxl:w-[330px] xxl:h-[348px] xxl:border-[15px]"
            }
          >
            <img src={Image_2} className={styles.image} alt="" />
            <img src={Shape} className={styles.shape} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
