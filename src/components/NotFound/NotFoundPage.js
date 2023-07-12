import React from 'react';
import Footer from '../common/Footer/Footer'
import style from "./NotFound.module.css"
import Navbar from "../common/Navbar/Navbar";
import Img from "../../images/NotFound/error.png"
import { Link , useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";

const NotFoundPage = () => {
    const navigate = useNavigate ();
    const clickHandler = () => {
        navigate ( "/" );
    }
    return (
        <>
            <Navbar dark={true}/>
            <div className={ style.MainBody }>
                <div className={ style.imageContainer }>
                    <img src={ Img } alt="axe"/>
                </div>
                <div className={ style.buttonContainer }>
                    <button onClick={ clickHandler  }>
                        به صفحه اصلی بروید
                    </button>
                </div>
            </div>
            {/*<Footer/>*/}
        </>
    );
}

export default NotFoundPage;