import React from 'react';
import Footer from '../../components/common/Footer/Footer'
import style from "./style/NotFound.module.css"
import Navbar from "../../components/common/Navbar/Navbar";
import Img from "../../assets/images/NotFound/error.png"
import {  useNavigate } from "react-router-dom";

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
            <Footer/>
        </>
    );
}

export default NotFoundPage;