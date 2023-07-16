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
import BASE_URL, { ACCOUNTS } from '../../../Config/ApiConfig';


const LogOut = ( { open , closeModal,token } ) => {
    const navigate = useNavigate ();
    const { isLogOpen , setIsLogOpen } = useContext ( LogoutContext );
    const {  setIsIn } = useContext ( DakhelContext );
    const [data,setData] = useState({
        token:token
    })
    // CONTEXTS
// functions
    const submitHandler = () => {

axios.post(BASE_URL + ACCOUNTS.LOGOUT,data)
    .then(r =>{
        console.log(r)

    })
        localStorage.removeItem ( "token" )
        localStorage.removeItem('id')
        navigate ( "/" )
        console.log("salam")
        setIsIn(false)
        setIsLogOpen(false)
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