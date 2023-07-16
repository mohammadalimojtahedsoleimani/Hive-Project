import Image_0 from "../../../images/LandingPage/selected_posts_image_0.png";
import Image_1 from "../../../images/LandingPage/selected_posts_image_1.png";
import Image_2 from "../../../images/LandingPage/selected_posts_image_2.png";
import PostCard from "../common/PostCard/PostCard";
import { useContext, useEffect, useState } from "react";
import { CharityContext } from "../../../context/CharityContext";
import axios from "axios";
import BASE_URL, { CHARITY } from "../../../Config/ApiConfig";

const SelectedPosts = (props) => {
  // variables
  const [charity1, setCharity1] = useState([]);
  const { charity, setCharity } = useContext(CharityContext);
  let slicedData = charity.slice(0, 3);
  useEffect(() => {
    axios({
      method: "get",
      url: BASE_URL + CHARITY.ADS + "?page=1",
      // data: fileData,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    })
      .then(function (response) {
        //   setSheetNumber(response.data["id"]);
        setCharity(response.data.results);
        // setPage ( response.data.current_page )
        // setPageNumber ( Number ( number.page ) )
        // setItemsInfo ( {
        //     total_objects : response.data.total_objects ,
        //     total_pages : response.data.total_pages
        // } )
        //   toast.success("!آپلود شد", {
        //     position: toast.POSITION.TOP_LEFT,
        //   });
        //   navigate("/words");
      })
      .catch(function (error) {
        console.log(error);
        //   const response = error.request.responseText;
        //   toast.error(response === "" ? error.message : response, {
        //     position: toast.POSITION.TOP_LEFT,
        //   });
      });
  }, []);
  const postsArray = [
    {
      id: 1,
      image: Image_0,
      raiser_full_name: "علیرضا محمدی",
      published_date: "2023-07-10T20:24:37.573000+03:30",
      title: "جمع آوری کمک برای کودکان کار",
      snippet:
        "یقینا قلب همه ما هنگامی که فرزندان این سرزمین را در سر چهار راه ها یا معابر در حال کار می بینیم، به درد می آید، کودکانی که باید بر سر بازی و تحصیل خود باشند تا آینده سازان این مرز و بوم بوده و ارزش آفرینی کنند هدف من جمع آوری مبلغی برای کمک به این کودکان و خرید مایحتاجشان در این شرایط بد اقتصادی است .....",
      collected_amount: "250.000",
      estimated_amount: "1.000.000",
      category: {
        name: "سایر",
      },
      collected_percentage: 25,
    },
    {
      id: 2,
      image: Image_1,
      raiser_full_name: "علیرضا محمدی",
      published_date: "2023-07-10T20:24:37.573000+03:30",
      title: "جمع آوری کمک برای زلزله خوی",
      snippet:
        "هم وطنانمان در خوی، گرفتار بلای طبیعی زلزله اند و اکنون فرصت آن است تا دست به دست هم دهیم و در کنار دولت، ما نیز کمک حالشان شویم تا این عزیزان از گزند سرما و بی پناهی جان به در برند، من و تیمم در حال آماده سازی بسته های معیشتی برای خواهران و برادرانمان در خوی هستیم .....",
      collected_amount: "5.000.000",
      estimated_amount: "100.000.000",
      category: {
        name: "حوادث طبیعی",
      },
      collected_percentage: 5,
    },
    {
      id: 3,
      image: Image_2,
      raiser_full_name: "زهرا علیزاده",
      published_date: "2023-07-10T20:24:37.573000+03:30",
      title: "جمع آوری کمک برای کودکان کار بی بضاعت",
      snippet:
        " در آغاز فصل مدارس، قشر آسیب پذیر کودکان کار که توانایی تامین خرج های اولیه زندگی خود را ندارند، بدون امکانات تحصیلی به مدارس می روند بیایید کمک حالشان باشیم بسته های تحصیلی ای که برایشان آماده کرده ایم بسیار ساده و در حد نیاز های اولیه هست، اما این کودکان معصوم را شاد میکند....",
      collected_amount: "3.000.000",
      estimated_amount: "15.000.000",
      category: {
        name: "سایر",
      },
      collected_percentage: 20,
    },
  ];
  const posts = charity.length > 0 ? slicedData : postsArray;

  return (
    <section className=" bg-[#5E86FF] px-[5rem] xxl:px-[10rem] py-[3rem] xxl:py-[6rem]">
      <h2 className="text-[white] font-bold text-[20] xxl:text-[27px] mb-11 xxl:mb-28">
        آخرین کمک ها
        <hr className=" bg-gray-400 inline-block mr-4 m-1 h-[1px] xxl:w-[66px]" />
      </h2>
      <div className="flex justify-center gap-4 xxl:gap-14">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

export default SelectedPosts;
