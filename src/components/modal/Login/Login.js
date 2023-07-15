import React , { useContext , useState } from 'react';
import { useNavigate } from "react-router-dom";
import { notify } from "../../../helper/toast";
import { createPortal } from 'react-dom';
import styles from "../Login/Login.module.css";
import cancel from "../../../images/modal/close.svg";
import { LoginModalContext } from "../../../context/LoginContext";
import { ProfileContext } from "../../../context/ProfileContext";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { DakhelContext } from "../../../context/DakhelContext";


const Login = ( { open } ) => {
    const navigate = useNavigate ();
    // const { isPassOpen , setIsPassOpen } = useContext ( ForgetModalContext )
    const { setIsOpenLogin } = useContext ( LoginModalContext )
    // const { setIsOpen } = useContext ( SignUpContext );
    const { isIn , setIsIn } = useContext ( DakhelContext );
    const { profile , setProfile } = useContext ( ProfileContext );
    let login = "ورود"
    const [ inIn , isInIn ] = useState ( false )

    const [ data , setData ] = useState ( {
        email : "" ,
        password : ""
    } )
    const [ touch , setTouch ] = useState ( {} )
    const [ errors , setErrors ] = useState ( {} )
    const delay = 2000;
    const submitHandler = async ( event ) => {
        event.preventDefault ();
        await axios.post ( "http://127.0.0.1:8000/accounts/api/v1/jwt/create/" , data )
            .then ( async response => {
                localStorage.setItem ( "token" , response.data.access )
                localStorage.setItem ( 'id' , response.data.user_id )
                notify ( 'ورود موفقیت آمیز بود' , 'success' )

                setData ( {
                    email : "" ,
                    password : ""
                } )
                const timer = setTimeout ( () => {
                    setErrors ( {} )
                    setIsOpenLogin ( false )
                    setIsIn ( true )
                    window.location.reload ();


                } , delay );


            } )

            .catch ( error => {
                setErrors ( error.response.data )
                setIsIn ( false )
                notify ( "ایمیل یا رمزعبور غلط میباشد" , "error" )

            } )


    }
    const focusHandler = ( event ) => {
        setTouch ( { ... touch , [ event.target.name ] : true } )

    }
    const changeHandler = ( event ) => {
        setData ( { ... data , [ event.target.name ] : event.target.value } )

    }
    const closeHandler = () => {
        setData ( {
            email : "" ,
            password : ""
        } )
        setErrors ( {} )
        setIsOpenLogin ( false )


    }
    const forgetPasswordClickHandler = () => {
        // setIsPassOpen ( true );
    }
    const cancelImageHandler = () => {
        // setIsOpen ( false )
        setIsOpenLogin ( false )
        // setIsPassOpen ( false )
        setData ( {
            email : "" ,
            password : ""
        } )
        setErrors ( {} )
    }
    if ( ! open ) {
        return null
    }
    return createPortal (
        <>
            <div className={ styles.OVERLAY_STYLES }
                 onClick={ closeHandler }/>
            <div className={ styles.MODAL_STYLES }>
                <form onSubmit={ submitHandler } className={ styles.formContainer }>
                    <img className={ styles.closeButton } src={ cancel }
                         onClick={ cancelImageHandler }
                         alt="cancel"/>
                    <h2 className={ styles.header }>ورود</h2>
                    <div className={ styles.formField }>

                        <input type="text" name="email"
                               className={ styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.email } placeholder="ایمیل"/>

                    </div>
                    <div className={ styles.formField }>
                        <input type="password" name="password"
                               className={ styles.formInput }
                               onFocus={ focusHandler }
                               onChange={ changeHandler } value={ data.password } placeholder="رمز عبور"/>
                    </div>
                    <div className={ styles.formButtons }>
                        <button type="submit">{ login }</button>

                        <div className={ styles.listContainer }>

                            <span onClick={ forgetPasswordClickHandler } className={ styles.loginP }
                            >رمز عبور خود را فراموش کرده ام.</span>
                            {/*<Email open={ isPassOpen } closePassModal={ () => setIsPassOpen ( false ) }>*/ }

                            {/*</Email>*/ }
                        </div>

                    </div>
                </form>


            </div>
            <ToastContainer/>
        </> ,
        document.getElementById ( "portal" )
    );
};

export default Login;