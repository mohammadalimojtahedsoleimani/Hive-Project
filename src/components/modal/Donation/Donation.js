import React , { useContext , useEffect , useState } from 'react';
import { DonationContext } from "../../../context/DonationContext";
import styles from "./Donation.module.css";
import { createPortal } from "react-dom";
import cancel from "../../../images/modal/close.svg";
import { ToastContainer } from "react-toastify";
import heart from "../../../images/DonationModal/heart1.png"
import close from "../../../images/DonationModal/close.png"
import axios from "axios";
import { notify } from "../../../helper/toast";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { DakhelContext } from "../../../context/DakhelContext";


const Donation = ( { open , ChairtyTitle , pageId } ) => {
    // variables
    const { setIsDonationOpen } = useContext ( DonationContext );
    const [ money , setMoney ] = useState ( '' )
    const [ errors , setErrors ] = useState ( {} )
    const { isIn , setIsIn } = useContext ( DakhelContext );
    let value = localStorage.getItem ( "token" );
    const delay = 2000;
    const [ er , setEr ] = useState ( '' )


    // functions
    const closeHandler = () => {
        setMoney ( '' )
        setErrors ( {} )
        setIsDonationOpen ( false )
        toast.dismiss();


    }
    if ( ! open ) {
        return null
    }
    const changeHandler = ( event ) => {
        setMoney ( event.target.value )
    }
    const btnHandler = ( event ) => {
        setMoney ( event.target.value )
    }

    const submitHandler = () => {
        if ( isIn === false ) {
            toast.warning('برای اهدای پول لطفا وارد شوید.'     ,{
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "colored",
            })

        } else {
            if ( money > 0 ) {


                const formData = new FormData ()
                formData.append ( 'advertisement' , pageId )
                formData.append ( 'amount' , money )
                axios.post ( `http://127.0.0.1:8000/charity/api/v1/donations/` , formData , {
                    headers : {
                        'Authorization' : `JWT ${ value }`
                    }
                } )
                    .then ( r => {
                        console.log ( r.data )
                        notify ( `پرداخت  با موفقیت انجام شد.  ` , 'success' )
                        const timer = setTimeout ( () => {
                            setIsDonationOpen ( false )

                            window.location.reload ();


                        } , delay );

                    } )
                    .catch ( er => {
                        console.log ( er.response )
                    } )
            } else {
                notify ( ' !مقدار وارد شده معتبر نیست' , 'er' )
            }
        }
    }
    return createPortal (
        <>


            <div className={ styles.OVERLAY_STYLES }
                 onClick={ closeHandler }/>
            <div className={ styles.MODAL_STYLES }>
                <div className={ styles.formContainer }>
                    <img src={ close } alt="axe close" className={ styles.closeButton } onClick={ closeHandler }/>
                    <p>{ ChairtyTitle }</p>
                    <span></span>
                    <div className={ styles.inputContainer }>
                        <input type="text" className={ styles.moneyInput } id="money" onChange={ changeHandler }
                               name="money" value={ money }/>

                        <label htmlFor="money" className={ styles.moneyLabel }>تومان</label>
                        <img src={ heart } alt="axe ghalb" className={ styles.heart }/>
                        { errors.money  && <span>{ errors.money  }</span> }

                        <button className={ styles.randomButton }>
                            انتخاب مبلغ دلخواه
                        </button>
                    </div>
                    <div className={ styles.suggestsButtonContainer }>
                        <button className={ styles.suggestsButton } onClick={ btnHandler } value="1000000">1.000.000
                            تومان
                        </button>
                        <button className={ styles.suggestsButton } onClick={ btnHandler } value="2000000">2.000.000
                            تومان
                        </button>
                        <button className={ styles.suggestsButton } onClick={ btnHandler } value="500000">500.000
                            تومان
                        </button>
                        <button className={ styles.suggestsButton } onClick={ btnHandler } value="200000">200.000
                            تومان
                        </button>
                        <button className={ styles.suggestsButton } onClick={ btnHandler } value="100000">100.000
                            تومان
                        </button>

                    </div>
                    <div>
                        <p>انتخاب نحوه پرداخت</p>
                        <div className={ styles.radioButtonContainer }>
                            <input type="radio" value="online" name="methods"
                                   className={ styles.methodsRadioButton }/> پرداخت آنلاین
                            <input type="radio" value="cart" name="methods"
                                   className={ styles.methodsRadioButton }/> کارت به کارت
                            <input type="radio" value="arz" name="methods"
                                   className={ styles.methodsRadioButton }/> پرداخت ارزی
                        </div>
                    </div>
                    <div className={ styles.finalValueContainer }>


                        <button disabled className={ styles.mablaghSpan }>مبلغ نهایی جهت کمک:</button>
                        <button disabled className={ styles.moneyFinal }>{ money } تومان</button>
                    </div>
                    <button className={ styles.paymentButton } onClick={ submitHandler }>انتقال به درگاه پرداخت جهت
                        پرداخت مبلغ مشخص شده
                    </button>

                </div>

            </div>
            <ToastContainer/>
        </> ,
        document.getElementById ( "portal" )
    );
}

export default Donation;