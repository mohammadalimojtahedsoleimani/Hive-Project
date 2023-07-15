import Google from "../images/SignUp/google.svg";
import Github from "../images/SignUp/github-cropped.svg";
import Logo from "../images/SignUp/logo.svg";
import Twitter from "../images/SignUp/links/twitter.svg";
import Insta from "../images/SignUp/links/insta.svg";
import Pinterest from "../images/SignUp/links/pinterest.svg";
import Youtube from "../images/SignUp/links/youtube.svg";
import Pattern1 from "../images/SignUp/patterns/pattern_1.svg";
import Pattern2 from "../images/SignUp/patterns/pattern_2.svg";
import { Link , useNavigate } from "react-router-dom";
import React , { useContext , useState } from "react";
import axios from "axios";
import { notify } from "../helper/toast";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { validate } from "../helper/validate";
import styles from "./SignUp.module.css";
import { useEffect } from "react";

const SignUpPage = () => {
    //variables
    const navigate = useNavigate ();
    const delay = 2000;

    const [ data , setData ] = useState ( {
        email : "" ,
        password : "" ,
        password1 : "" ,
    } );
    const [ emailError , setEmailError ] = useState ( null );
    const [ passwordError , setPasswordError ] = useState ( null );
    const [ password1Error , setPassword1Error ] = useState ( null );
    const [ errors , setErrors ] = useState ( {} );
    const [ isSelected , setIsSelected ] = useState ( false );
    const [ touch , setTouched ] = useState ( {} )

    useEffect ( () => {
        setErrors ( validate ( data ) )
    } , [ data,touch ] );
    // functions
    const submitHandler = ( event ) => {
        event.preventDefault ();
        axios
            .post ( "http://127.0.0.1:8000/accounts/api/v1/registration/" , data )
            .then ( ( response ) => {
                notify ( "ثبت نام موفقیت آمیز بود!" + " ایمیل خود را تایید کنید" , "info" );
                setData ( {
                    email : "" ,
                    password : "" ,
                    password1 : "" ,
                } );

                console.log ( response )
                const timer = setTimeout ( () => {
                    navigate ( "/posts/1" );
                } , delay );
            } )
            .catch ( ( error ) => {
                console.log ( "the error:the error " , error );
            } );
    };
    const handleCheckboxChange = () => {
        setIsSelected ( ! isSelected );
    };
    const error_margin = ( error ) => {
        console.log ( "in error margin function: " , error );
        if ( error === undefined ) {
            return { marginBottom : "calc(0.8vw + 0.1rem)" };
        }
        return null;
    };

    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } );
    };
    const focusHandler = ( event ) => {
        setTouched ( { ... touch , [ event.target.name ] : true } )

    }
    const inputStyle =
        "text-[#A3A3A3] bg-[#F3F2F2] rounded-lg text-[17px] xxl:text-[19px] p-[0.4rem] xxl:p-[0.9rem] mb-[0.9rem] xxl:mb-[1.5rem]";
    const form = () => {
        return (
            <form className="flex flex-col" onSubmit={ submitHandler }>
                <input
                    type="email"
                    placeholder="پست الکترونیکی"
                    className={ inputStyle }
                    onChange={ changeHandler }
                    value={ data.email }
                    name="email"
                    id="email"
                    onFocus={focusHandler}
                />
                { errors.email && touch.email &&
                    <span className="text-red-500 flex flex-col justify-center items-center">
            { errors.email }
          </span>
                }
                <input
                    type="password"
                    placeholder="رمز عبور"
                    className={ inputStyle }
                    onChange={ changeHandler }
                    value={ data.password }
                    name="password"
                    id="password"
                    onFocus={focusHandler}
                />
                { errors.password && touch.password &&
                    <span className="text-red-500 flex flex-col justify-start items-start">
            { errors.password }
          </span>
                 }
                <input
                    type="password"
                    placeholder="تکرار رمز عبور"
                    className={ inputStyle }
                    onChange={ changeHandler }
                    value={ data.password1 }
                    name="password1"
                    id="password1"
                    onFocus={focusHandler}
                />
                { errors.password1 && touch.password1 &&
                    <span className="text-red-500 flex flex-col justify-start items-start">
            { errors.password1 }
          </span>
                }
                <div className="text-[10px] xxl:text-[13px] flex items-center gap-3">
                    <input
                        type="checkbox"
                        checked={ isSelected }
                        onChange={ handleCheckboxChange }
                        id="selectCheck"
                    />
                    <label htmlFor="">
                        <Link to={ "" } className="text-[#4D7AD2] underline ml-2">
                            قوانین و مقررات .
                        </Link>
                        هایو را تایید مینمایم
                    </label>
                </div>
                {/*<input*/ }
                {/*    type="submit"*/ }
                {/*    value="ساخت حساب کاربری"*/ }
                {/*    className="text-white bg-[#4D7AD2] rounded-lg text-[18px] xxl:text-[21px] py-[0.8rem] xxl:py-[1.2rem] my-6 xxl:my-9"*/ }
                {/*/>*/ }
                <button
                    type="submit"
                    className="text-white bg-[#4D7AD2] rounded-lg text-[18px] xxl:text-[21px] py-[0.8rem] xxl:py-[1.2rem] my-6 xxl:my-9"
                >
                    ساخت حساب کاربری
                </button>
            </form>
        );
    };
    return (
        <div
            className="page min-h-[100vh] flex"
            style={ {
                backgroundImage :
                    "linear-gradient(100deg, rgb(77, 122, 210) 44%, white 44.1%)" ,
            } }
        >
            <div
                className="right flex-1 flex justify-center items-center pl-[3.5rem] xxl:px-[5.5rem] pr-[5rem] xxl:pr-[8rem] min-h-[100vh]">
                <div className="right_parent pt-[4.5rem] relative bottom-8 xxl:bottom-16">
                    <h3 className="font-[700] text-[38px] xxl:text-[44px] mb-10 xxl:mb-20">
                        ایجاد حساب کاربری جدید
                    </h3>
                    <div className="form_parent">{ form ( data ) }</div>
                    <div className="login font-[500] text-[15px] xxl:text-[17px]">
                        <span>آیا حساب کاربری دارید ؟ </span>
                        <Link to={ "" } className="text-[#4D7AD2]">
                            وارد شوید{ " " }
                        </Link>
                    </div>
                    <div
                        className="grid grid-cols-3 font-[500] text-[15px] xxl:text-[18px] my-6 xxl:my-10 text-[#4D7AD2]">
                        <div className="flex flex-col justify-center">
                            <hr/>
                        </div>
                        <span className="flex items-center justify-center">
              یا از این طریق ثبت نام کنید
            </span>
                        <div className="flex flex-col justify-center">
                            <hr/>
                        </div>
                    </div>
                    <div className="flex justify-between gap-5 other_ways xxl:gap-9">
                        <button
                            className="flex items-center gap-3 xxl:gap-5 px-[1rem] xxl:px-[2rem] py-[0.7rem] xxl:py-[1.1rem] rounded-md"
                            style={ { border : "2px solid #555555" } }
                        >
              <span className="font-[500] text-[15px] xxl:text-[18px]">
                ثبت نام از طریق گیت هاب
              </span>{ " " }
                            <img src={ Github } alt="" className="w-[44px] xxl:w-[54px]"/>
                        </button>
                        <button
                            className="flex items-center gap-3 xxl:gap-5 px-[1rem] xxl:px-[2rem] py-[0.7rem] xxl:py-[1.1rem] rounded-md"
                            style={ { border : "2px solid #555555" } }
                        >
              <span className="font-[500] text-[15px] xxl:text-[18px]">
                ثبت نام از طریق گوگل اکانت
              </span>
                            <img src={ Google } alt="" className="w-[44px] xxl:w-[54px]"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="left flex-1 flex flex-col relative min-h-[100vh]">
                <div className="flex-1"></div>
                <div className="flex-[5] flex flex-col content-between px-9 xxl:px-11">
                    <Link to="/">
                        <div className="fixed flex top-8 xxl:top-12 left-10 xxl:left-14 cursor-pointer">
              <span className=" text-[white] font-IrishGrover  text-[34px] xxl:text-[39px]">
                Hive
              </span>
                            <img src={ Logo } alt="" className="w-[70px] xxl:w-[82px]"/>
                        </div>
                    </Link>
                    <div>
                        <h2 className="text-[#EEEEEE] font-[700] text-[40px] xxl:text-[48px]">
                            هایو، اجتمایی برای گسترش نیکوکاری
                        </h2>
                        <p className="text-white text-[30px] xxl:text-[36px] pr-6 xxl:pr-8 pt-20 xxl:pb-32">
                            هایو، اجتمایی از نیکوکاران و نیازمندان را گردهم آورده تا با ایجاد
                            فضایی امن و شفاف از نظر مالی، فرآیند کمک گیری و کمک رسانی را هر چه
                            بیشتر تسهیل بخشد. 🕊
                        </p>
                    </div>
                    <div className="fixed icons bottom-32 xxl:bottom-40 left-24 xxl:left-28">
                        <ul className="flex gap-7 xxl:gap-16" dir="ltr">
                            <li>
                                <Link to={ "" }>
                                    { " " }
                                    <img
                                        src={ Twitter }
                                        alt=""
                                        className="w-[34px] xxl:w-[40px]"
                                    />{ " " }
                                </Link>
                            </li>
                            <li>
                                <Link to={ "" }>
                                    { " " }
                                    <img
                                        src={ Insta }
                                        alt=""
                                        className="w-[34px] xxl:w-[40px]"
                                    />{ " " }
                                </Link>
                            </li>
                            <li>
                                <Link to={ "" }>
                                    { " " }
                                    <img
                                        src={ Pinterest }
                                        alt=""
                                        className="w-[34px] xxl:w-[40px]"
                                    />{ " " }
                                </Link>
                            </li>
                            <li>
                                <Link to={ "" }>
                                    { " " }
                                    <img
                                        src={ Youtube }
                                        alt=""
                                        className="w-[34px] xxl:w-[40px]"
                                    />{ " " }
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <img src={ Pattern1 } alt="" className="absolute bottom-0 left-2"/>
                        <img src={ Pattern2 } alt="" className="absolute bottom-0 left-2"/>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default SignUpPage;
