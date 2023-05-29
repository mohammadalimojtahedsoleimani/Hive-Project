import React from 'react';
import styles from "./AboutUs.module.css"
import Navbar from "../../common/Navbar/Navbar"
import Footer from "../../common/Footer/Footer"
import IMG from "../../../images/AboutUs/aboutUs.png"
import MiddleIMG from "../../../images/AboutUs/backgroundMiddle.png"

const AboutUs = () => {
    return (
        <>
            <Navbar dark={ true }/>
            <div className={ styles.MainBody }>
                <div className={ styles.TopBody }>
                    <div className={ styles.FirstLine }>
                        <p>هایو، اجتماعی از نیکوکاران و نیازمندان</p>
                    </div>
                    <div className={ styles.SecondLine }>
                        <p>هایو، بستری امن و گسترده، برای شنیده شدنِ نیازمندان در اجتماعی از</p>
                        <p>نیکوکاران و خیرین</p>
                    </div>
                    <div className={ styles.FirstParagraph }>
                        <p>تیم هایو متشکل از گروهی از دانشجویان است که با هداف خیرخواهانه، بر آن شده اند تا هر چه بیشتر،
                            فرآیند کمک رسانی به نیازمندان را سهولت بخشند. شبکه اجتماعی هایو،</p>
                        <p>ماحصل تلاش ما برای شنیده و دیده شدن هر چه بیشتر نیازمندی ها و تسهیل فرآیند کمک رسانی به
                            نیازمندان توسط خیرین و نیکوکاران است.👼</p>
                        <p>
                            ایران عزیز ما، همواره جایگاه نیک اندیشان و نیک منشانی بوده که دست در دست هم داده اند تا هم
                            وطنی، به دلیل نیاز مالی، دچار مشکلات جدی نشود </p>
                        <p>لذا هایو با ایجاد این شبکه اجتماعیی گسترده میان مردم، همدلی و نوع دوستی را تقویت کرده و آسان
                            میکند. 💰🎉🙏</p>
                    </div>

                </div>
                <div className={ styles.imageContainer }>
                    <img src={ IMG } alt="axe about us"/>
                </div>
                <div className={ styles.middleContainer }>
                    <p>☮امید است روزی که نیازمندی ای نباشد جز مهر و عشق🕊</p>

                </div>

            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;