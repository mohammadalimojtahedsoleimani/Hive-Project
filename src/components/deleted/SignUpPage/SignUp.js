import React from 'react';
import styles from "./SignUp.module.css"
import logo from "../../../images/logo/logoHive.svg"
import twitter from "../../../images/logo/Vector1.svg"
import instagram from "../../../images/logo/insta.svg"
import pinterest from "../../../images/logo/Vector3.svg"
import youtube from "../../../images/logo/vec4.svg"
const SignUp = () => {
    return (
        <>
            <div className={ styles.mainContainer }>
                <div >
                    <div className={styles.leftSide}/>
                    <img src={ logo } alt="axe" className={ styles.logoStyle }/>
                    <span className={ styles.Hive }>Hive</span>
                    <p className={ styles.leftHeader }>هایو، اجتماعی برای گسترش نیکوکاری</p>

                    <p className={ styles.leftPar }>
                        <br/> هایو، اجتماعیی از نیکوکاران و نیازمندان را
                        <br/> گردهم آورده تا با ایجاد فضایی امن و شفاف
                        <br/> از نظر مالی، فرآیند کمک گیری و کمک رسانی
                        <br/> را هر چه بیشتر تسهیل بخشد. 🕊
                    </p>
                   <img src={twitter} alt="twitter" className={styles.twitter}/>
                    <img src={instagram} alt="instagram" className={styles.insta}/>
                   <img src={pinterest} alt="pinterest" className={styles.pinterest}/>
                    <img src={youtube} alt="youtube" className={styles.youtube}/>

                </div>
                <div className={ styles.rightSide }>
                    <p className={styles.rightHeader}>ایجاد حساب کاربری جدید</p>
                    <input type="text" name="username"
                           className={ styles.formInput1 }
                            placeholder="نام کاربری"/>
                    <input type="text" name="username"
                           className={ styles.formInput2 }
                           placeholder="پست الکترونیکی"/>
                    <input type="text" name="username"
                           className={ styles.formInput3 }
                           placeholder="رمز عبور"/>

                    <button className={styles.signButton}>ساخت حساب کاربری</button>
<p className={styles.underSign}>آیا حساب کاربری دارید؟
    <b className={styles.loginSpan}> وارد شوید.</b></p>

                    <span className={styles.leftLine}></span>
                    <span className={styles.textContainer}>یاازاین طریق ثبت نام کنید</span>
                    <span className={styles.rightLine}></span>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <div>
                        <span></span>
                        <span></span>
                    </div>

                </div>
            </div>


        </>
    )
        ;
};

export default SignUp;