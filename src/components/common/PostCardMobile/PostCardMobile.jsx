import Calendar from "../../../assets/images/common/PostCard/calendar.svg";
import Person from "../../../assets/images/common/PostCard/person.svg";
import styles from "./PostCardMobile.module.css";
import { moneyToText } from "../../../helper/Utils";
import { Link } from "react-router-dom";

const PostCardMobile = ({ post }) => {
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
      }}
      className="bg-white min-w-[71vw]"
    >
      <Link to={`/post/${post.id}`}>
        <img src={post.image} alt="" className="w-full " />
      </Link>
      <div className={styles.info}>
        <div className={styles.name_date_parent}>
          <span className={styles.name}>
            <img src={Person} alt="" />
            {post.raiser_full_name}
          </span>
          <span className={styles.date}>
            <img src={Calendar} alt="" />
            {post.published_date}
          </span>
        </div>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.snippet}>{post.snippet}</p>

        <div className={styles.money_info}>
          <div className={styles.money_info_top}>
            <span>کمک های مالی جمع شده</span>
            <span>{Math.floor(post.collected_percentage).toString()}%</span>
          </div>
          <div className={styles.line}>
            <hr
              className={styles.full_line}
              style={{
                width: `${Math.floor(post.collected_percentage).toString()}%`,
              }}
            />
          </div>
          <div className={styles.money_info_bottom}>
            <span>جمع شده : {moneyToText(post.collected_amount)}</span>
            <span>هدف : {moneyToText(post.estimated_amount)}</span>
          </div>
        </div>
        <div className={styles.button_parent}>
          <button className={styles.button}>کمک میکنم</button>
        </div>
      </div>
    </div>
  );
};

export default PostCardMobile;
