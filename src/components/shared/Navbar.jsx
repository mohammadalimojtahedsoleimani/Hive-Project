import React , { useContext , useEffect , useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Navbar.module.css";
import Search from "./../../images/Navbar/search.svg";
import Logo from "./../../images/Navbar/logo.svg";
import SignUp from "../modal/SignUp";
import Login from "../modal/Login/Login";
import { LoginModalContext , LoginModalProvider } from "../../context/LoginContext";
import { SignUpContext } from "../../context/SignUpContext";
import { DakhelContext } from "../../context/DakhelContext";
import { notify } from "../../helper/toast";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const BUTTON_WRAPPER_STYLES = {
    position : "relative" ,
    zIndex : 1 ,
};
const BUTTON_WRAPPER_LOGIN_STYLES = {
    position : "relative" ,
    zIndex : 1 ,
};

const Navbar = () => {
    const navigate = useNavigate ();
    const { isOpen , setIsOpen } = useContext ( SignUpContext );
    const { isOpenLogin , setIsOpenLogin } = useContext ( LoginModalContext );
    const { isIn , setIsIn } = useContext ( DakhelContext );
    const [ logged , setLogged ] = useState ( false )
    const name = localStorage.getItem ( "username" )
    const [ token , setToken ] = useState ( "" )
    const [output,setOutPut]=useState({})
    const [ data , setData ] = useState ( {
        username : "" ,
        id : 0 ,
        email : ""
    } )

    useEffect ( () => {
        if ( isIn ) {

            setIsIn ( false )
        }
        const token = localStorage.getItem ( "token" )

        const authorizationHeader = `JWT ${ token }`
         axios ( {
            method : 'get' ,
            url : 'https://hive.iran.liara.run/auth/users/' ,
            headers : {
                'Content-Type' : 'application/json' ,
                'Authorization' : 'JWT ' + token

            }
        } )
            .then ( function ( r ) {

                console.log(r.data[0].username)

                localStorage.setItem ( "username" , r.data[0].username )
                localStorage.setItem ( "id" , r.data[0].id )
            } )
            .catch ( function ( error ) {
                console.log ( error );
            } )

        if ( token ) {
            setLogged ( true )
        }
    } , [ isIn ] )
    const clickHandler = () => {
        navigate ( "/" );
    };
    const goProfileHandler = () => {
        navigate ( "/profile" )
    }
    return (
        <header className={ styles.header }>
            <div className={ styles.mainContainer }>
                <div className={ styles.right }>
                    {/*<Link to="/cart"><button>search</button> </Link>*/ }
                    <div style={ BUTTON_WRAPPER_STYLES } className={ styles.lists }>
                        { logged ?
                            <button className={ styles.img_navbar_logged } onClick={ goProfileHandler }></button> :
                            <button className={ styles.p2 } onClick={ () => setIsOpen ( true ) }>
                                ?????? ??????
                            </button> }

                        <SignUp open={ isOpen } closeModal={ () => setIsOpen ( false ) }></SignUp>
                    </div>

                    <div style={ BUTTON_WRAPPER_LOGIN_STYLES } className={ styles.lists }>
                        { logged ? <p className={styles.username}>{ name }</p> :
                            <button className={ styles.p1 } onClick={ () => setIsOpenLogin ( true ) }>
                                ????????
                            </button> }


                        <Login
                            open={ isOpenLogin }
                            closeModal={ () => setIsOpenLogin ( false ) }
                        ></Login>
                    </div>

                    <Link to="/Posts" className={ styles.lists }>
                        <img
                            src={ Search }
                            alt="search icon"
                            className={ styles.search_icon }
                        />
                    </Link>
                </div>
                <div className={ styles.left } onClick={ clickHandler }>
                    <span className={ styles.brand_title }>Hive</span>
                    <img className={ styles.brand_logo } src={ Logo } alt="brand logo"/>
                </div>
            </div>
            <ToastContainer className={ styles.Toast }/>
        </header>

    );
};

export default Navbar;
