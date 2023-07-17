import Image_0 from "../../../assets/images/LandingPage/qualities_image_0.svg";
import Image_1 from "../../../assets/images/LandingPage/qualities_image_1.svg";
import Image_2 from "../../../assets/images/LandingPage/qualities_image_2.svg";
import Image_3 from "../../../assets/images/LandingPage/qualities_image_3.svg";
import Card from "./common/Card";

const Qualities = () => {
  const cardsArray = [
    {
      id: 0,
      image: Image_0,
      text_1: "+4597",
      text_2: "نیکوکار",
    },
    {
      id: 1,
      image: Image_1,
      text_1: "+100",
      text_2: "کشور های عضو",
    },
    {
      id: 2,
      image: Image_2,
      text_1: "+10M",
      text_2: "نیازمند",
    },
    {
      id: 3,
      image: Image_3,
      text_1: "+8945",
      text_2: "داوطلب",
    },
  ];
  return (
    <section className="px-[5rem] xxl:px-[10rem] py-[3rem] xxl:py-[6rem]">
      <h2 className="font-bold text-[20] xxl:text-[27px] mb-11 xxl:mb-28">
        دستان شما زندگی بخش است{" "}
        <hr className=" bg-gray-400 inline-block mr-4 m-1 h-[1px] xxl:w-[66px]" />
      </h2>
      <div className="flex justify-center gap-2 xxl:gap-6">
        {cardsArray.map((card) => (
          <Card image={card.image} text_1={card.text_1} text_2={card.text_2} />
        ))}
      </div>
    </section>
  );
};

export default Qualities;
