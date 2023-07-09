import React , { useContext , useEffect , useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ForgetModalContext } from "../../../context/forgetPassContext";
import { LoginModalContext } from "../../../context/LoginContext";
import { SignUpContext } from "../../../context/SignUpContext";
import axios from "axios";
import { notify } from "../../../helper/toast";
import { createPortal } from "react-dom";
import styles from "./LogOut.module.css";
import cancel from "../../../images/modal/close.svg";
import { LogoutContext } from "../../../context/LogoutContext";
import { DakhelContext } from "../../../context/DakhelContext";


const LogOut = ( { open , closeModal } ) => {
    const navigate = useNavigate ();
    const { isLogOpen , setIsLogOpen } = useContext ( LogoutContext );
    const {  setIsIn } = useContext ( DakhelContext );
    // CONTEXTS
// functions
    const submitHandler = () => {
        localStorage.removeItem ( "token" )
        navigate ( "/" )
        console.log("salam")
        setIsIn(false)
    }
    const closeHandler = () => {
        setIsLogOpen ( false )

    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div onClick={ closeHandler } className={ styles.OVERLAY_STYLE }/>
            <div className={ styles.MODAL_STYLE }>
                <div className={ styles.formContainer }>
                    <img src={ cancel } alt="axe cancel" className={ styles.cancel } onClick={ closeHandler }/>
                    <p className={ styles.sure }>آیا مطمئن هستید میخواهید خارج شوید؟</p>
                    <div className={ styles.buttonContainer }>
                        <button className={ styles.button1 } onClick={ closeHandler }>بازگشت</button>
                        <button className={ styles.button2 } onClick={ submitHandler }>تایید</button>

                    </div>

                </div>


            </div>

        </> ,
        document.getElementById ( "portal" )
    );
};
export default LogOut;