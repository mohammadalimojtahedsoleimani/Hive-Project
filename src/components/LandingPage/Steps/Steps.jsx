import StepsImage from "../../../images/LandingPage/steps.png";

const Steps = (props) => {
  return (
    <section className="px-[5rem] xxl:px-[10rem] py-[3rem] xxl:pt-[8rem] xxl:pb-[6rem]">
      <div className=" xxl:mb-[5rem]">
        <h2 className=" font-bold xxl:text-[25px]">چه اتفاقی می افتد؟ 😳</h2>
        <h3 className="  text-[#717171] xxl:text-[24px]">
          جمع آوری ائانه در هایو تنها چند دقیقه زمان میبرد.
        </h3>
      </div>
      <div className=" pl-[2rem] xxl:pl-[8rem]">
        <img src={StepsImage} className="xxl:pl-9 xxl:pr-9" alt="" />
        <div className="flex justify-between text-[19px]">
          <span>با چیز های پایه‌ای شروع کنید.</span>
          <span>داستان خود را تعریف کنید.</span>
          <span>با دوستان خود به اشتراک بگذارید.</span>
        </div>
      </div>
    </section>
  );
};

export default Steps;
