import React from 'react';
import styles from "./AboutUs.module.css"
import Navbar from "../../common/Navbar/Navbar"
import Footer from "../../common/Footer/Footer"
import IMG from "../../../images/AboutUs/aboutUs.png"
import MiddleIMG from "../../../images/AboutUs/backgroundMiddle.png"
import rightTriplePart from "../../../images/AboutUs/rightone.png"
import middleTriplePart from "../../../images/AboutUs/middleone.png"
import rightAndLeftDots from "../../../images/AboutUs/dots.png"
import leftTriplePart from "../../../images/AboutUs/leftone.png"
import endImagePic from "../../../images/AboutUs/end.png"
import { Link } from "react-router-dom";
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
                <div className={ styles.tripleContainer }>


                    <div className={ styles.TriplePart }>
                        <div className={ styles.asanPart }>
                            <div className={ styles.imageRight }>
                                <img src={ rightTriplePart } alt="axe right one"/>
                            </div>
                            <div className={ styles.rightParContainer }>
                                <p className={ styles.titleRight }>آسان و راحت</p>
                                <div className={ styles.parTriplerightContainer }>
                                    <p className={ styles.parTripleRight }>ایجاد آگهی و کمک رسانی به</p>
                                    <p className={ styles.parTripleRight }>آگهی ها در زمان بسیار کوتاه با</p>
                                    <p className={ styles.parTripleRight }>فرآیندی آسان قابل انجام است</p>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.rightDots }>
                            <img src={ rightAndLeftDots } alt="dots"/>
                        </div>
                        <div className={ styles.middlePart }>
                            <div className={ styles.imageMiddle }>
                                <img src={ middleTriplePart } alt="axe right one"/>
                            </div>
                            <div className={ styles.middleParContainer }>
                                <p className={ styles.titleRight }>اجتماعی دوستانه</p>
                                <div className={ styles.parTripleMiddleContainer }>
                                    <p className={ styles.parTripleRight }>هایو، اجتماعی از نیکوکاران و</p>
                                    <p className={ styles.parTripleRight }>نیازمندان را گردهم آورده تا با</p>
                                    <p className={ styles.parTripleRight }>ایجاد فضایی امن</p>
                                </div>
                            </div>
                        </div>
                        <div className={ styles.leftDots }>
                            <img src={ rightAndLeftDots } alt="dots"/>
                        </div>
                        <div className={ styles.leftPart }>
                            <div className={ styles.imageLeft }>
                                <img src={ leftTriplePart } alt="axe right one"/>
                            </div>
                            <div className={ styles.leftParContainer }>
                                <p className={ styles.titleRight }>امن و قابل اعتماد</p>
                                <div className={ styles.parTripleLeftContainer }>
                                    <p className={ styles.parTripleRight }>هایو، اجتماعی از نیکوکاران و</p>
                                    <p className={ styles.parTripleRight }>نیازمندان را گردهم آورده تا با</p>
                                    <p className={ styles.parTripleRight }>ایجاد فضایی امن</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className={ styles.buttonContainer }>
                        <Link to='/signUp'>
                        <button className={ styles.buttonSignUp }>
                            شروع و ثبت نام
                        </button>
                        </Link>
                    </div>
                </div>
                <div className={styles.endContainer}>
                    <img src={endImagePic} alt="axe end"/>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;