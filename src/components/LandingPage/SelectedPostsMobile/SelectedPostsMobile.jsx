import Image_0 from "../../../images/LandingPage/selected_posts_image_0.png";
import Image_1 from "../../../images/LandingPage/selected_posts_image_1.png";
import Image_2 from "../../../images/LandingPage/selected_posts_image_2.png";
import PostCardMobile from "../../common/PostCardMobile/PostCardMobile";
import styles from "./SelectedPostsMobile.module.css";

const SelectedPostsMobile = (props) => {
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
        {/* {projects.map((project) => {
          return (
            <div key={project.id} className={styles.project_element}>
              <img className={styles.img} src={project.pic}></img>
              <div>
                <img className={styles.more_info_btn} src={moreInfoButton}></img>
                <p className={styles.project_desc}>طراحی سایت</p>
                <p className={styles.project_title}>{project.title}</p>
              </div>
            </div>
          );
        })} */}
        {postsArray.map((post) => (
          <PostCardMobile post={post} />
          // <div className={styles.project_element}>
          //   <img className={styles.img} src={post.image}></img>
          //   <div>
          //     {/* <img className={styles.more_info_btn} src={moreInfoButton}></img> */}
          //     <p className={styles.project_desc}>طراحی سایت</p>
          //     <p className={styles.project_title}>{post.title}</p>
          //   </div>
          // </div>
        ))}
      </div>
    </section>

    // <section className=" bg-[#5E86FF] px-[5rem] xxl:px-[10rem] py-[3rem] xxl:py-[6rem]">
    //   <h2 className="text-[white] font-bold text-[20] xxl:text-[27px] mb-11 xxl:mb-28">
    //     آخرین کمک ها
    //     <hr className=" bg-gray-400 inline-block mr-4 m-1 h-[1px] xxl:w-[66px]" />
    //   </h2>
    //   <div className="flex justify-center gap-4 xxl:gap-14">
    //     {postsArray.map((post) => (
    //       <PostCard posts={post} />
    //     ))}
    //   </div>
    // </section>
  );
};

export default SelectedPostsMobile;