import Calendar from "../../../images/LandingPage/selected_posts_calendar.svg";
import Person from "../../../images/LandingPage/selected_posts_person.svg";
import { Link } from "react-router-dom";
import styles from "../../mainPages/charityPage/CharityPage.module.css";
import React from "react";
import stle from "./PostCard.module.css"
const PostCard = ( {
                       id ,
                       image ,
                       name ,
                       date ,
                       title ,
                       description ,
                       collected ,
                       target ,
                       collected_percentage
                   } ) => {
    console.log ( "postss " , image );
    return (
        <div
            style={ {
                boxShadow : "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" ,
            } }
            className="w-[300px] xxl:w-[350px] mx-4 xxl:mx-7"
        >
            <Link to={ `/post/${ id }` }>

                <div
                    style={ {
                        backgroundImage : `url(${ image })` ,
                        backgroundSize : "cover" ,
                    } }
                    className="w-full  h-[200px] xxl:h-[300px] cursor-pointer"
                ></div>
            </Link>
            {/* <img src={image} alt="" className="w-full h-[200px] xxl:h-[270px]" /> */ }
            <div className="p-1 xxl:p-3">
                <div className="flex justify-between text-gray-400">
          <span className="flex items-center gap-1 xxl:gap-3 text-[11px] xxl:text-[15px] ">
            <img src={ Person } alt=""/>
              { name }
          </span>
                    <span className="flex items-center gap-1 xxl:gap-3 text-[10px] xxl:text-[14px]">
            <img src={ Calendar } alt=""/>
                        { date }
          </span>
                </div>
                <h2 className="font-bold text-[15px] xxl:text-[21px] mt-3 xxl:mt-6 text-blue-500 text-opacity-100">
                    { title }
                </h2>
                {/* <p className='text-[10px] xxl:text-[14px] h-16 xxl:h-24'>{description}</p> */ }
                <div className="w-[75%] py-4 xxl:py-8">
                    <div className="flex justify-between">
            <span className="text-[10px] xxl:text-[14px] font-bold">
              کمک های مالی جمع شده
            </span>
                        <span className="text-[10px] xxl:text-[14px] font-bold">{ collected_percentage }%</span>
                    </div>
                    <div className={ styles.totalBar }>

                        <div className={ stle.progressBar }>
                            <div className={ stle.progressBarDisplay } style={ {
                                width : `${ collected_percentage }%` ,
                                backgroundColor : "#4D7AD2" ,
                                transition : "width 0.5s"
                            } }></div>

                        </div>

                    </div>
                    <div className="flex justify-between">
            <span className="text-[10px] xxl:text-[12px]">
              جمع شده : { collected } میلیون تومان
            </span>
                        <span className="text-[10px] xxl:text-[12px]">
              هدف : { target } میلیون تومان
            </span>
                    </div>
                </div>
                <div className="pb-1 pl-1 text-left xxl:pb-3 xxl:pl-3">
                    <button
                        style={ { border : "solid #219D80 1.5px" , borderRadius : "5px" } }
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
