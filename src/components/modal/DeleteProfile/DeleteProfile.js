import React , { useContext , useEffect , useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../../../context/SignUpContext";
import axios from "axios";
import { notify } from "../../../helper/toast";
import { createPortal } from "react-dom";
import styles from "../LogOut/LogOut.module.css";
import cancel from "../../../assets/images/modal/close.svg";
import { DeleteprofContext } from "../../../context/DeleteprofContext";
import { DakhelContext } from "../../../context/DakhelContext";
import BASE_URL, { ACCOUNTS } from '../../../Config/ApiConfig';


const DeleteProfile = ( { open , closeModal } ) => {
    const navigate = useNavigate ();
    const { isDelOpen , setIsDelOpen } = useContext ( DeleteprofContext );
    const { setIsIn } = useContext ( DakhelContext );
    let value;
    let id;

    // CONTEXTS
// functions
    useEffect ( () => {
        value = localStorage.getItem ( 'token' )

    } , [ isDelOpen ] )
    const submitHandler = () => {
        axios.delete ( BASE_URL + ACCOUNTS.DELETE_ACCOUNT , {
            headers : {
                'Authorization' : `JWT ${ value }`
            }
        } )
            .then ( r => {
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                navigate ( '/' );
                setIsDelOpen(false)
                setIsIn(false)
            } )

    }
    const closeHandler = () => {
        setIsDelOpen ( false )

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
                    <p className={ styles.sure }>آیا مطمئن هستید میخواهید حساب کاربری خود را حذف کنید؟</p>
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
export default DeleteProfile;