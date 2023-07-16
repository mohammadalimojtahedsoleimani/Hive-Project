import React , { useContext , useEffect , useState } from 'react';
import styles from "./CharityPage.module.css"
import Navbar from "../components/common/Navbar/Navbar"
import Footer from "../components/common/Footer/Footer"
import khoye from "../images/CharityPage/khoye.png"
import poorKodak from "../images/CharityPage/poor kodak.png"
import people from "../images/CharityPage/peoplevector.png"
import calender from "../images/CharityPage/calender.png"
import clock from "../images/CharityPage/clock.png"
import { useLocation } from "react-router-dom";
import axios from "axios";
import { DonationContext } from "../context/DonationContext";
import Donation from "../components/modal/Donation/Donation";
import DateTransformer from "../helper/dateTransformer";
import { moneyToText } from '../helper/Utils';
import BASE_URL, { CHARITY } from '../Config/ApiConfig';
// innate styles
const BUTTON_WRAPPER_DONATE_STYLES = {
    position : "relative" ,
    // zIndex : 1 ,
};

const CharityPage = () => {
    // Variables
    let value = 0
    const { pathname } = useLocation ();
    const segments = pathname.split ( "/" );
    let charity_id = segments[ 2 ]
    const [ category , setCategory ] = useState ( '' )
    const [ title , setTitle ] = useState ( '' )
    const [ image , setImage ] = useState ( '' )
    const [ raiser_full_name , setRaiser_full_name ] = useState ( '' )
    const [ published_date , setPublished_date ] = useState ( '' )
    const [ content , setContent ] = useState ( '' )
    const [ estimated_amount , setEstimated_amount ] = useState ( '' )
    const [ collected_amount , setCollected_amount ] = useState ( '' )
    const [ collected_percentage , setCollected_percentage ] = useState ( '' )
    const dateOnly = published_date.split ( 'T' )[ 0 ];
    let formattedNumber = collected_amount.toLocaleString ( 'fa-IR-u-nu-arab' , { minimumFractionDigits : 0 } )
    // contexts
    const { isDonationOpen , setIsDonationOpen } = useContext ( DonationContext );
    // functions
    useEffect ( () => {


        axios.get ( BASE_URL + CHARITY.ADS + charity_id +'/' )
            .then ( r => {
                setCategory ( r.data.category.name )
                setTitle ( r.data.title )
                setRaiser_full_name ( r.data.raiser_full_name ) 
                setPublished_date ( r.data.published_date )
                setEstimated_amount ( r.data.estimated_amount )
                setCollected_amount ( r.data.collected_amount )
                setImage ( r.data.image )
                setContent ( r.data.content )
                setCollected_percentage ( r.data.collected_percentage )

            } )


    } , [] )

const handleReadTime = (content) =>{
    console.log(content.length * 0.2);
    const minute = Math.floor(content.length * 0.2 / 60)
    if (minute === 0) {
     return 'کمتر از 1 دقیقه'
    }
    return ` ${minute} دقیقه`

}
    return (
        <>
            <Navbar dark={ true }/>
            <div className={ styles.mainBody } style={BUTTON_WRAPPER_DONATE_STYLES} >

                <div className={ styles.topBody }>
                    <div className={ styles.rightPartTop }>
                        <p>{ title }</p>
                        <div className={ styles.rightPartTopIMG }>
                            <img src={ image } alt="axe rast" className={ styles.rightPartTopImage }/>
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
                                <p>{ raiser_full_name }</p>
                            </div>
                            <div className={ styles.dateContainer }>
                                <img src={ calender } alt="axe calender"/>
                                <p>{ DateTransformer ( dateOnly ) }</p>
                            </div>
                            <div className={ styles.estimatedTimeContainer }>
                                <img src={ clock } alt="axe clock"/>
                                <p>{handleReadTime(content)}</p>
                            </div>

                        </div>
                        <div className={ styles.descriptionContainer }>
                            <p>
                                { content }

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
                                <p>{ collected_percentage }%</p>
                            </div>
                            <div className={ styles.totalBar }>

                                <div className={ styles.progressBar }>
                                    <div className={ styles.progressBarDisplay } style={ {
                                        width : `${ collected_percentage }%` ,
                                        backgroundColor : "#4D7AD2" ,
                                        transition : "width 0.5s"
                                    } }></div>

                                </div>


                            </div>
                            <div className={ styles.totalDonationNumber }>
                                <p>جمع شده: { formattedNumber } تومان</p>
                                <p>هدف: { moneyToText(estimated_amount) }</p>
                            </div>
                        </div>
                        <div className={ styles.buttonContainer }>
                            <div className={ styles.shareButtonContainer }>
                                <button className={ styles.shareButton }>اشتراک گذاری</button>

                            </div>
                            <div className={ styles.donateButtonContainer }>
                                <div style={ BUTTON_WRAPPER_DONATE_STYLES }>


                                    <button className={ styles.donateButton }
                                            onClick={ () => setIsDonationOpen ( true ) }>پرداخت کمک
                                    </button>
                                    <Donation open={ isDonationOpen } closeModal={ () => setIsDonationOpen ( false ) }
                                              ChairtyTitle={ title } pageId={ charity_id } collect={ collected_amount }
                                              estimate={ estimated_amount }>
                                    </Donation>

                                </div>
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