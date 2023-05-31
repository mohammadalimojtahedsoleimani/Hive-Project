import React from 'react';
import styles from "./CharityPage.module.css"
import Navbar from "../../common/Navbar/Navbar"
import Footer from "../../common/Footer/Footer"
import rightImg from "../../../images/CharityPage/kodak kar.png"
import khoye from "../../../images/CharityPage/khoye.png"
import poorKodak from "../../../images/CharityPage/poor kodak.png"
import people from "../../../images/CharityPage/peoplevector.png"
import calender from "../../../images/CharityPage/calender.png"
import clock from "../../../images/CharityPage/clock.png"

const CharityPage = () => {
    // Variables
    let value = 60
    return (
        <>
            <Navbar/>
            <div className={ styles.mainBody }>
                <div className={ styles.topBody }>
                    <div className={ styles.rightPartTop }>
                        <p>جمع آوری کمک برای کودکان کار</p>
                        <div className={ styles.rightPartTopIMG }>
                            <img src={ rightImg } alt="axe rast"/>
                        </div>
                    </div>
                    <div className={ styles.leftPartTop }>
                        <div className={ styles.leftPartTopUpContainer }>
                            <p>پست های مرتبط</p>
                            <span></span>
                        </div>
                        <div className={ styles.RelatedPostsContainer }>
                            <div className={ styles.leftPartTopRelatedPostContainer }>
                                <div className={ styles.leftPartTopRelatedImgContainer }>
                                    <img src={ khoye } alt="axe khoye"/>
                                </div>
                                <div className={ styles.leftPartTopParRelatedContainer }>
                                    <p className={ styles.leftPartTopParRelatedContainerText }>جمع آوری کمک برای زلزله
                                        خوی</p>

                                    <p className={ styles.leftPartTopParRelatedContainerCategory }>مالی</p>
                                </div>
                            </div>
                            <div className={ styles.leftPartDownRelatedPostContainer }>
                                <div className={ styles.leftPartTopRelatedImgContainer }>
                                    <img src={ poorKodak } alt="axe khoye"/>
                                </div>
                                <div className={ styles.leftPartTopParRelatedContainer }>
                                    <p className={ styles.leftPartTopParRelatedContainerText }>جمع آوری کمک برای کودکان
                                        کار بی بضاعت
                                    </p>

                                    <p className={ styles.leftPartTopParRelatedContainerCategory }>مالی</p>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
                <div className={ styles.downBody }>
                    <div className={ styles.rightDownPart }>


                        <div className={ styles.detailedContainer }>
                            <div className={ styles.usernameContainer }>
                                <img src={ people } alt="axe people"/>
                                <p>علیرضا محمدی</p>
                            </div>
                            <div className={ styles.dateContainer }>
                                <img src={ calender } alt="axe calender"/>
                                <p>12 اردیبهشت 1401</p>
                            </div>
                            <div className={ styles.estimatedTimeContainer }>
                                <img src={ clock } alt="axe clock"/>
                                <p>زمان مطالعه 10 دقیقه</p>
                            </div>

                        </div>
                        <div className={ styles.descriptionContainer }>
                            <p>
                                علوم تجربی در پاسخ همه این پرسشها به «نمی‌دانم» می‌رسد؛ زیرا نمی‌توان اینها را آزمود.
                                علوم تجربی به مسائل محدود و جزئی پاسخ می‌دهد، اما از تصویر کلی جهان ناتوان است.
                                این است که علوم تجربی از پاسخ به اساسی ترین مسائلی که برای جهان‌بینی لازم است، یعنی
                                برداشتهای کلی درباره مجموع و سرتاسر جهان، ناتوان است.
                            </p>

                        </div>
                    </div>
                    <div className={ styles.leftDownPart }>
                        <div className={ styles.detailCharityContainer }>
                            <span className={ styles.detailCharityContainerSpan }>اطلاعات این کمپین</span>
                            <span className={ styles.detailCharityContainerLine }></span>

                        </div>
                        <div className={ styles.donationDetailsContainer }>
                            <div className={ styles.totalDonationPercent }>
                                <p>کمک های مالی جمع شده</p>
                                <p>60%</p>
                            </div>
                            <div className={ styles.totalBar }>

                                <div className={ styles.progressBar }>
                                    <div className={ styles.progressBarDisplay } style={ {
                                        width : `${ value }%` ,
                                        backgroundColor : "#219D80" ,
                                        transition : "width 0.5s"
                                    } }></div>

                                </div>


                            </div>
                            <div className={ styles.totalDonationNumber }>
                                <p>جمع شده: 6 تومان</p>
                                <p>هدف: 10 تومان</p>
                            </div>
                        </div>
                        <div className={ styles.buttonContainer }>
                            <div className={ styles.shareButtonContainer }>
                                <button className={ styles.shareButton }>اشتراک گذاری</button>

                            </div>
                            <div className={ styles.donateButtonContainer }>


                                <button className={ styles.donateButton }>پرداخت کمک</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default CharityPage;