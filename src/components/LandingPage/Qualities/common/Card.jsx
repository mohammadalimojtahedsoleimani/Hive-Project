const Card = ({ image, text_1, text_2 }) => {
  return (
    <div
      style={{ backgroundColor: "#6B90FF22" }}
      className="flex flex-col items-center rounded-2xl py-6 xxl:py-20 px-10 xxl:px-28"
    >
      <img
        src={image}
        alt=""
        className=" h-[90px] xxl:h-[120px] w-[90px] xxl:w-[120px]"
      />
      <span className="font-Nunito font-bold text-[30px] xxl:text-[48px] xxl:py-6">
        {text_1}
      </span>
      <span className="font-medium  text-[15px] xxl:text-[20px]">{text_2}</span>
    </div>
  );
};

export default Card;
