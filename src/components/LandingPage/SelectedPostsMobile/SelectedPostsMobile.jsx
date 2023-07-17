import Image_0 from "../../../assets/images/LandingPage/selected_posts_image_0.png";
import Image_1 from "../../../assets/images/LandingPage/selected_posts_image_1.png";
import Image_2 from "../../../assets/images/LandingPage/selected_posts_image_2.png";
import PostCardMobile from "../../common/PostCardMobile/PostCardMobile";
import styles from "./SelectedPostsMobile.module.css";

const SelectedPostsMobile = () => {
  const postsArray = [
    {
      image: Image_0,
      raiser_full_name: "علیرضا محمدی",
      date: "12 اردیبهشت 1401",
      title: "جمع آوری کمک برای کودکان کار",
      snippet:
        "یقینا قلب همه ما هنگامی که فرزندان این سرزمین را در سر چهار راه ها یا معابر در حال کار می بینیم، به درد می آید، کودکانی که باید بر سر بازی و تحصیل خود باشند تا آینده سازان این مرز و بوم بوده و ارزش آفرینی کنند هدف من جمع آوری مبلغی برای کمک به این کودکان و خرید مایحتاجشان در این شرایط بد اقتصادی است .....",
      collected_amount: 6,
      estimated_amount: 10,
      collected_percentage: 60,
    },
    {
      image: Image_1,
      raiser_full_name: "علیرضا محمدی",
      date: "8 بهمن 1401",
      title: "جمع آوری کمک برای زلزله خوی",
      snippet:
        "هم وطنانمان در خوی، گرفتار بلای طبیعی زلزله اند و اکنون فرصت آن است تا دست به دست هم دهیم و در کنار دولت، ما نیز کمک حالشان شویم تا این عزیزان از گزند سرما و بی پناهی جان به در برند، من و تیمم در حال آماده سازی بسته های معیشتی برای خواهران و برادرانمان در خوی هستیم .....",
      collected_amount: 33,
      estimated_amount: 100,
      collected_percentage: 60,
    },
    {
      image: Image_2,
      raiser_full_name: "زهرا علیزاده",
      date: "13 دی 1401",
      title: "جمع آوری کمک برای کودکان کار بی بضاعت",
      snippet:
        " در آغاز فصل مدارس، قشر آسیب پذیر کودکان کار که توانایی تامین خرج های اولیه زندگی خود را ندارند، بدون امکانات تحصیلی به مدارس می روند بیایید کمک حالشان باشیم بسته های تحصیلی ای که برایشان آماده کرده ایم بسیار ساده و در حد نیاز های اولیه هست، اما این کودکان معصوم را شاد میکند....",
      collected_amount: 3,
      estimated_amount: 20,
      collected_percentage: 60,
    },
  ];
  return (
    <section className={styles.parent}>
      <h2 className={styles.title}>
        آخرین کمک ها
        <hr />
      </h2>
      <div className={styles.projects_part}>
        {postsArray.map((post) => (
          <PostCardMobile post={post} />
        ))}
      </div>
    </section>
  );
};

export default SelectedPostsMobile;
