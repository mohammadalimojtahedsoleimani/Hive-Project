import Calendar from "../../../images/LandingPage/selected_posts_calendar.svg";
import Person from "../../../images/LandingPage/selected_posts_person.svg";

const PostCard = ({
  image,
  name,
  date,
  title,
  description,
  collected,
  target,
}) => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
      className="w-[350px] xxl:w-[450px]"
    >
      <img src={image} alt="" className="w-full h-[250px] xxl:h-[320px]" />
      <div className="p-1 xxl:p-3">
        <div className="flex justify-between text-gray-400">
          <span className="flex items-center gap-1 xxl:gap-3 text-[11px] xxl:text-[15px]">
            <img src={Person} alt="" />
            {name}
          </span>
          <span className="flex items-center gap-1 xxl:gap-3 text-[10px] xxl:text-[14px]">
            <img src={Calendar} alt="" />
            {date}
          </span>
        </div>
        <h2 className="text-[#219D80] font-bold text-[15px] xxl:text-[21px] my-3 xxl:my-6">
          {title}
        </h2>
        <p className="text-[10px] xxl:text-[14px] h-20 xxl:h-28">
          {description}
        </p>
        <div className="w-[75%] py-4 xxl:py-8">
          <div className="flex justify-between">
            <span className="text-[10px] xxl:text-[14px] font-bold">
              کمک های مالی جمع شده
            </span>
            <span className="text-[10px] xxl:text-[14px] font-bold">90%</span>
          </div>
          <div className="inline-block bg-[#C7E7DF] rounded-[8px] h-2 xxl:h-4 w-full">
            <hr className="bg-[#219D80] rounded-[8px] h-full w-[90%]" />
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] xxl:text-[12px]">
              جمع شده : {collected} میلیون تومان
            </span>
            <span className="text-[10px] xxl:text-[12px]">
              هدف : {target} میلیون تومان
            </span>
          </div>
        </div>
        <div className="text-left pb-1 xxl:pb-3 pl-1 xxl:pl-3">
          <button
            style={{ border: "solid #219D80 1.5px", borderRadius: "5px" }}
            className="text-[#219D80] text-[12px] xxl:text-[16px] p-2 xxl:p-4"
          >
            کمک میکنم
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
