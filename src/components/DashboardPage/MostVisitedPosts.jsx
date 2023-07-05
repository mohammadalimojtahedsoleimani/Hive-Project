import MoneyBag from "../../images/common/icons/Money Bag.svg";
import PiggyBank from "../../images/common/icons/Piggy Bank.svg";
import PiggyBank2 from "../../images/common/icons/Piggy Bank 2.svg";
import Donation from "../../images/common/icons/Donation.svg";
import { Fragment , useEffect , useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MostVisitedPosts = () => {
    // const mostVisitedPostsArr = [
    //     { name : "ترکیه" , money : "7,019,000 تومان" } ,
    //     { name : "زاهدان" , money : "4,033,000 تومان" } ,
    //     { name : "کودکان کار کرج" , money : "3,971,000 تومان" } ,
    //     { name : "کودکان کار اصفهان" , money : "2,904,000 تومان" } ,
    //     { name : "نیازمندان منیریه تهران" , money : "2,802,000 تومان" } ,
    //     { name : "تغذیه 3200 کودک" , money : "1,130,000 تومان" } ,
    //     { name : "ارسال دارو به مازندران" , money : "781,000 تومان" } ,
    // ];
  const [mostVisitedPosts,setMostVisitedPosts] = useState([])
    useEffect ( () => {
axios.get('http://127.0.0.1:8000/charity/api/v1/popular-advertisements/')
    .then(r =>{
      console.log(r.data)
      setMostVisitedPosts(r.data)
    })
    } , [] )

    const iconsArr = [ MoneyBag , PiggyBank , PiggyBank2 , Donation ];
    return (
        <div
            className="bg-[#ffffff] py-[2rem] xxl:py-[3rem] px-[1.7rem] xxl:px-[3rem] mt-[2rem] xxl:mt-[5rem]"
            style={ {
                boxShadow : "0px 9px 8px -4px rgba(0,0,0,0.3)" ,
            } }
        >
            <div className="flex flex-col items-center font-bold text-[13px] xxl:text-[16px] gap-2 mb-3 xxl:mb-5">
                <h3>آگهی های پر طرفدار</h3>
                <hr className="w-[45%] h-[1px]"/>
            </div>
            <table>
                <tbody className="flex flex-col">
                { mostVisitedPosts.map ( ( post ) => {

                    return (
                        <Link to={`/post/${post.id}`}>
                        <tr className="text-[10px] xxl:text-[14px] py-2 xxl:py-4 flex justify-between gap-3 xxl:gap-9 min-w-[14rem] xxl:min-w-[19rem]">
                            <th className="flex items-center justify-center gap-3">
                                <img
                                    src={ iconsArr[ Math.floor ( Math.random () * iconsArr.length ) ] }
                                    alt=""
                                    className="w-6 xxl:w-8"
                                />{ " " }
                                { post.title }
                            </th>
                            <th>{ Math.round(post.collected_amount) } تومان</th>
                        </tr>
                        </Link>
                    );
                }  ) }
                </tbody>
            </table>
        </div>
    );
};

export default MostVisitedPosts;
