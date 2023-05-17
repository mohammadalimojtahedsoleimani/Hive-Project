import React from "react";
import image from "../images/PostPage/photo.jpg";
import image1 from "../images/PostPage/image.jpg";
import image2 from "../images/PostPage/wat.jpg";
import calender from "../images/PostPage/icons8-calendar-50.png";
import clock from "../images/PostPage/icons8-clock-50.png";
import person from "../images/PostPage/icons8-person-30.png";
import {Slider} from "@mui/material";
import styles from "./zainstyle.module.css"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function main_page (){
    return(
        <Container className={styles.margintopincss}>
            <Row>
                <Col  xl={9} sm={12} md={9} lg={9}>
                <h1 className={styles.h1marginbottom}> جمع آوری کمک برای کودکان کار</h1>
                <br></br>
                <div>
                <img src={image} alt=""/>
                </div>
                <Row   className={styles.colmargin}></Row>
                    <Row>
                            <Col xl={3} sm={3} md={3} xm={3}>
                                <img src={person} alt="" className={styles.img}></img>
                                <span> علی رضا محمدی </span>
                            </Col >
                            <Col  xl={3} sm={3} md={3} xm={3}>
                                <img src={calender} alt=""   className={styles.img}></img>
                                <span> 12 اردیبهشت 1401 </span>
                            </Col>
                            <Col  xl={3} sm={3} md={3} xm={3}>
                                <img src={clock} alt=""   className={styles.img}></img>
                                <span> زمان مطالعه 10 دقیقه </span>
                            
                            </Col>
                    </Row>
                    <Row></Row>
                    <Row    className={styles.colmargin}>
                        <Col className={styles.innerpadding}>
                            <div>
                                <br></br>
                                <h1> جمع آوری کمک برای کودکان کار شهر کرج </h1>
                                <br></br>
                                <p>یقینا قلب همه ما هنگامی که فرزندان این سرزمین را در سر چهار راه ها یا معابر در حال کار می بینیم، به درد می آید، کودکانی که باید بر سر بازی و تحصیل خود باشند تا آینده سازان این مرز و بوم بوده و ارزش آفرینی کنند
                                    هدف من جمع آوری مبلغی برای کمک به این کودکان و خرید مایحتاجشان در این شرایط بد اقتصادی است .....</p>
                            <p>هدف من جمع آوری مبلغی برای کمک به این کودکان و خرید مایحتاجشان در این شرایط بد اقتصادی است...</p>
                                </div>
                            <div>
                                <br></br>
                                <h1>چرا باید کمک کنیم ؟</h1>
                                <br></br>
                                <p>اینجانب علیرضامحمدی فعال مدنی در حوزه کودکان کار هستم هدف از این آگهی جمع آوری کمک هزینه ای برای کمک کار
                                در شهرستان کرج بوده که همگی شاهد این هستیم که روزانه به تعداد این کودکان اضافه می شود</p>
                            </div>
                    </Col>
                    </Row>
                </Col>
                <Col  className={[ styles.margint]}   xl={3} sm={12} md={3} lg={3}>
                <div className={[styles.postcard]}>
                    <br></br>
                    <h5>پست های مرتبط</h5>
                    <Row>
                        <Col xl={3} sm={3} md={3} xm={3}><hr></hr></Col>
                        <Col xl={3} sm={3} md={3} xm={3}></Col>
                        <Col xl={3} sm={3} md={3} xm={3}></Col>
                        <Col xl={3} sm={3} md={3} xm={3}></Col>
                    </Row>
                    <Row>
                        <Col xl={6} sm={6} md={6} xm={6} className={styles.imagecardsize}>
                            <img src={image2} alt="" width={150} height={110}></img>
                        </Col>
                        <Col xl={6} sm={6} md={6} xm={6}>
                        <div className={styles.padding}>
                            <h5> جمع آوری کمک برای زلزله خوی</h5>
                            
                            <span>مالی</span>
                        </div>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xl={6} sm={6} md={6} xm={6} className={styles.imagecardsize}>
                            <img src={image1} alt="" width={150} height={110}></img>
                        </Col>
                        <Col xl={6} sm={6} md={6} xm={6}  className={styles.padding}>
                        <h5>جمع آوری کمک برای کودکان کار بی بضاعت</h5>
                        
                        <span>مالی</span>
                        </Col>
                    </Row>
                </div>
                <div className={styles.spacebetweenttwocard}>

                </div>
                <div className={styles.postcardslider}>
                    <br></br>
                    <h5>اطلاعات این کمپین</h5>
                    <br></br>
                    <Row>
                        <Col xl={9} sm={12} md={9} lg={9}>کمک های مالی جمع شده</Col> <Col xl={2} sm={12} md={2} lg={2}>60%</Col>
                    </Row>
                    <Slider className={styles.dir} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    <Row className={styles.smallfont}>
                        <Col xl={6} sm={12} md={6} lg={6}>جمع شده : 6 میلیون تومان</Col> <Col xl={6} sm={12} md={6} lg={6}>هدف : 10 میلیون تومان</Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col><Button  variant="success" className={styles.border}>اشتراک گذاری </Button></Col>
                        <Col><Button variant="success"> پرداخت کمک</Button></Col>
                    </Row>
                </div>

                </Col>
          </Row>
           
 

            
        </Container>
    );
}
export default main_page;