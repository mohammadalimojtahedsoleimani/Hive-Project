import React , { useContext , useEffect , useState } from 'react';
import ReactDOM from "react-dom/client";
import { createPortal } from 'react-dom';
import styles from "../../components/modal/SignUp.module.css";
import { Link } from "react-router-dom";
import { validate } from "../../helper/validate";
import { notify } from "../../helper/toast";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import Login from "./Login/Login";
import cancel from "../../images/close.svg"
import { DataContext } from "../../helper/test";
import { DataProvider } from "../../helper/test";

const MODAL_STYLES = {
    position : "fixed" ,
    top : "50%" ,
    left : "50%" ,
    bottom : "50%" ,
    transform : "translate(-50%, 50%)" ,
    backgroundColor : "#FFF" ,
    zIndex : 10000 ,
    display : "flex" ,
    alignItems : "center" ,
    justifyContent : "center" ,

}
const MODAL_STYLES_HIDDEN = {
    display : "none"
}
const OVERLAY_STYLES = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "rgba(0,0,0,.7)" ,
    zIndex : 10000
}
const OVERLAY_STYLE_LOGIN_CLICKED = {
    position : "fixed" ,
    top : 0 ,
    left : 0 ,
    right : 0 ,
    bottom : 0 ,
    backgroundColor : "transparent" ,
    zIndex : 10000
}
const BUTTON_WRAPPER_LOGIN_STYLES = {
    position : "relative" ,
    zIndex : 1
}
const SignUp = ( { open , closeModal } ) => {

    const { isOpenLogin , setIsOpenLogin } = useContext ( DataContext )
    const [ data , setData ] = useState ( {
        name : "" ,
        email : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    useEffect ( () => {
        setErrors ( validate ( data , "signup" ) )
        console.log ( errors )
    } , [ data , touch ] )
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        if ( ! Object.keys ( errors ).length ) {
            notify ( "ثبت نام با موفقیت انجام شد" , "success" )


        } else {
            notify ( "ورودی ها معتبر نیست! کامل وارد کنید" , "error" )
            setTouch ( {
                name : true ,
                email : true ,
                password : true
            } )
        }
    }
    const focusHandler = ( event ) => {

        setTouch ( { [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
    const loginClickHandler = () => {
        setIsOpenLogin ( true );
    }

    if ( ! open ) {
        return null
    }
    return createPortal (
        <>


            <div style={ isOpenLogin?  OVERLAY_STYLE_LOGIN_CLICKED:OVERLAY_STYLES }/>
            <div style={ isOpenLogin ? MODAL_STYLES_HIDDEN : MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>

                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ () => closeModal ( false ) } alt="che khabar?"/>

                    <h2 className={ styles.header }>ثبت نام</h2>
                    <div className={ styles.formField }>

                        <input type="text" name="name"
                               className={ ( errors.name && touch.name ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.name } placeholder="نام کاربری"/>
                        { errors.name && touch.name && <span>{ errors.name }</span> }

                    </div>
                    <div className={ styles.formField }>
                        <input type="text" name="email"
                               className={ ( errors.email && touch.email ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>
                        { errors.email && touch.email && <span>{ errors.email }</span> }

                    </div>
                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ ( errors.password && touch.password ) ? styles.uncompleted : styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                        { errors.password && touch.password && <span>{ errors.password }</span> }

                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">ثبت نام</button>
                        <div className={ styles.listContainer } style={ BUTTON_WRAPPER_LOGIN_STYLES }>



                            <span
                                onClick={ loginClickHandler }
                                className={ styles.loginP }>حساب کاربری دارید؟ وارد شوید.</span>

                                <Login open={ isOpenLogin } closeLoginModel={ () => setIsOpenLogin ( false ) }>

                                </Login>

                        </div>

                    </div>

                </form>

            </div>

        </> ,
        document.getElementById ( "portal" )
    );
}

export default SignUp;