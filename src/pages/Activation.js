import React , { useContext } from 'react';
import styles from './Activation.module.css'
import Navbar from '../components/common/Navbar/Navbar';
import veriImg from '../images/activation/verify.png'
import { useNavigate } from "react-router-dom";
import { LoginModalContext } from "../context/LoginContext";

const Activation = () => {
    // variables
    const navigate = useNavigate ();
    const {  setIsOpenLogin } = useContext ( LoginModalContext );
    // functions
    const clickHandler = () => {
        navigate ( '/dashboard' )
        setIsOpenLogin ( true )

    }
    return (
        <>
            <Navbar dark={ true }/>
            <div className={ styles.MainBody }>
                <div className={ styles.imageContainer }>
                    <img src={ veriImg } alt="axe veri"/>
                </div>
                <div className={ styles.buttonContainer }>
                    <button onClick={ clickHandler }>ادامه</button>

                </div>


            </div>

        </>
    );
};

export default Activation;