import Calendar from "../../../images/LandingPage/selected_posts_calendar.svg";
import Person from "../../../images/LandingPage/selected_posts_person.svg";
import { Link } from "react-router-dom";

const PostCard = ({ posts }) => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}
      className="bg-white w-[350px] xxl:w-[450px] rounded-lg overflow-hidden"
    >
      <Link to={`/post/${posts.id}`}>
        <img
          src={posts.image}
          alt=""
          className="w-full h-[250px] xxl:h-[320px]"
        />
      </Link>
      <div className="p-1 xxl:p-3">
        <div className="flex justify-between text-gray-400">
          <span className="flex items-center gap-1 xxl:gap-3 text-[11px] xxl:text-[15px]">
            <img src={Person} alt="" />
            {posts.raiser}
          </span>
          <span className="flex items-center gap-1 xxl:gap-3 text-[10px] xxl:text-[14px]">
            <img src={Calendar} alt="" />
            {posts.published_date}
          </span>
        </div>
        <h2 className="text-[#219D80] font-bold text-[15px] xxl:text-[21px] my-3 xxl:my-6">
          {posts.title}
        </h2>
        <p className="text-[10px] xxl:text-[14px] h-20 xxl:h-28">
          {posts.content}
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
              جمع شده : {posts.collected_amount} میلیون تومان
            </span>
            <span className="text-[10px] xxl:text-[12px]">
              هدف : {posts.estimated_amount} میلیون تومان
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
