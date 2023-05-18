import React from 'react';
import style from "./ChangePassword.module.css"
import IMGLock from "../../../images/ChangePassword/Group 10.png"
const ChangePasswordPage = () => {

    return (
        <>
            <div className={style.allFather}>


            <div className={style.rightContainer}>


            </div>
            <div className={style.leftContainer}>
                <div className={style.imgContainer}>
                    <img src={IMGLock} alt="axe"/>
                </div>
            </div>
            </div>
        </>
    );
}

export default ChangePasswordPage;