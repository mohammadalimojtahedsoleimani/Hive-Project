import React , { useContext , useEffect } from "react";
import styles from "./Navbar.module.css";
import Search from "../../../images/common/Navbar/search.svg";
import Profile from "../../../images/common/Navbar/profile.png";
import DownArrow from "../../../images/common/Navbar/down_arrow.svg";
import Logo from "../../../images/common/Navbar/logo.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { DakhelContext } from "../../../context/DakhelContext";

import { notify } from "../../../helper/toast";
import { LoginModalContext } from "../../../context/LoginContext";

const Navbar = ( props ) => {
    const { isIn , setIsIn } = useContext ( DakhelContext );
    const { isOpenLogin } = useContext ( LoginModalContext )
    const links = [
        { key : "home" , value : "خانه" } ,
        { key : "about_us" , value : " درباره ما" } ,
        { key : "pages" , value : "صفحات " } ,
        { key : "web_texts" , value : "وب نوشت ها" } ,
    ];
    useEffect ( () => {
        if ( isIn ) {
            notify ( "ورود موفقیت آمیز بود" , "success" )
        }
    } , [ isIn ] )

    return (
        <nav className={ styles.navbar + " px-16 xl:px-28 xxl:px-[17rem] top-8" }>
            <div className="flex w-full py-2   bg-white rounded-[71px] px-12 xl:px-17 xxl:px-[5rem] gap-5">
                {/* right */ }
                <div className={ styles.right + " gap-2" }>
                    <div>
                        <Link to="/posts/1">
                            <img
                                src={ Search }
                                alt=""
                                className="w-[2rem] xl:w-[2.5rem] xxl:w-[3rem] h-[2rem] xl:h-[2.5rem] xxl:h-[3rem]"
                            />
                        </Link>
                    </div>
                    <Link to='/dashboard'>
                        <div className="flex gap-3">
                            <div>
                                <img
                                    src={ Profile }
                                    alt="profile pic"
                                    className="w-[30px] xl:w-[40px] xxl:w-[50px] h-[30px] xl:h-[40px] xxl:h-[50px]"
                                />
                            </div>
                            <div className={ styles.prof_parent + " gap-1" }>
                                <img src={ DownArrow } alt="down arrow" className="w-4 h-2 mt-3"/>
                                <span className="text-sm font-medium xl:text-base xxl:text-xl text-secondary-500">
                محمدرضایاغی گر
              </span>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* center */ }
                <div className={ styles.center + " gap-6" }>
                    { links.map ( ( item ) => (
                        <Link
                            className="text-xs font-medium xl:text-sm xxl:text-lg text-secondary-500"
                            to={ item.key }
                        >
                            { item.value }
                        </Link>
                    ) ) }
                </div>
                {/* left */ }
                <Link to='/'>
                    <div className={ styles.left }>
          <span className={ styles.brand_name + " text-[20px] xxl:text-[31px]" }>
            Hive
          </span>
                        <img src={ Logo } className="w-[3rem] xxl:w-[5rem]" alt="logo"/>
                    </div>
                </Link>
            </div>
            <ToastContainer/>
        </nav>

    );
};

export default Navbar;
