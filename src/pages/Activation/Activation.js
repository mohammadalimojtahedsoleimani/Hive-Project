import React , { useContext } from 'react';
import styles from './style/Activation.module.css'
import Navbar from '../../components/common/Navbar/Navbar';
import veriImg from '../../assets/images/activation/verify.png'
import { useNavigate } from "react-router-dom";
import { LoginModalContext } from "../../context/LoginContext";
import { DakhelContext } from "../../context/DakhelContext";

const Activation = () => {
    // variables
    const navigate = useNavigate ();
    const {  setIsOpenLogin } = useContext ( LoginModalContext );
    // functions
    const clickHandler = () => {
        setIsOpenLogin ( true )
        navigate ( '/dashboard/info' )


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