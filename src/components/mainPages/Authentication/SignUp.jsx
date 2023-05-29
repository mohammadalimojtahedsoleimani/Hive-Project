import React,{useState, useEffect} from 'react'
import {Google,GitHub} from "@mui/icons-material";
import validate from "./validate";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toast";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import IMG from "../../../images/Authentication/image.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './signup.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import instagram from "../../../images/Authentication/Clip path group-1.png";
import pix from "../../../images/Authentication/Clip path group-2.png";
import clip3 from "../../../images/Authentication/Clip path group.png";
import vector from "../../../images/Authentication//Vector.png";
function SignUp() {
    const [data, setData] = useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        isAccepted: false
    })
    const [errors, setErrors] = useState ({});
    const [toched, setToched] = useState ({});

    useEffect(() =>{
        setErrors(validate(data, "SignUp"))
       
    }, [data, toched])
    const changeHandler = event =>{
        if(event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        }else{
            setData({...data, [event.target.name]: event.target.value})
        }
       
    }
    const focusHandler = event => {
        setToched({...toched, [event.target.name]: true})
    }
    const submitHandler = event =>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("ثبت نام شما موفقانه انجام شد", "success")
        }else{
            notify(" ! ثبت نام شما اشتباه است ", "error")
            setToched({
                name: true,
                lastName: true,
                email: true,
                password: true,
                isAccepted: true    
            })
        }
    }
    
  return (
    <Container fluid>
      <Row>
        
        <Col xs={6} xl={6} sm={6} md={6}>
            <Row>
                <Col  xs={1} xl={1} sm={1} md={1}></Col>
                <Col  xs={10} xl={10} sm={10} md={10}>
                <form onSubmit={submitHandler} className={Style.marginTop1}>
        <h2>ایجاد حساب کاربری جدید</h2>
        <br></br>
        <Row  className={Style.marginTop}> 
            <Col>
            <Form.Control type="text" placeholder="نام"  name="name" value={data.name}onChange={changeHandler} onFocus={focusHandler}/>
            {errors.name && toched.name&& <span>{errors.name}</span>}
            </Col>
            <Col>

            <Form.Control type="text" placeholder="نام خانوادگی"  name="lastName" value={data.lastName}onChange={changeHandler} onFocus={focusHandler} />
            {errors.lastName && toched.lastName && <span>{errors.lastName}</span>}
            </Col>
        
            
        </Row>
        <Row>
        <Col className={Style.marginTop}>
            <Form.Control type="email" placeholder="ایمیل"  name="email" value={data.email}onChange={changeHandler} onFocus={focusHandler}/>
            {errors.email && toched.email&& <span>{errors.email}</span>}
         </Col>
        </Row> 
        <Row>
        <Col className={Style.marginTop}>
            <Form.Control type="password" placeholder="رمز عبور"  name="password" value={data.password}onChange={changeHandler} onFocus={focusHandler}/>
            {errors.password && toched.password && <span>{errors.password}</span>}
        </Col>
        </Row>
        
        
        <div>
            <br></br>
            <label>
            <input type="checkbox" name="isAccepted" value={data.isAccepted}onChange={changeHandler} onFocus={focusHandler}/> 
             &nbsp; <sapn  className={Style.colorGreen}>قوانین و مقررات</sapn> هایو را تایید مینمایم. 
            </label>
        </div>
        <Row>
        <Col className={Style.marginTop}>
        <div className="d-grid gap-2">
            <Button type='submit' variant="success"  size="sm">ساخت حساب کاربری</Button>
        </div>
        </Col>
        </Row>
       
      </form>
 <div>
           
            <span>آیا حساب کاربری دارید ؟</span>
            <Link to='#' className={Style.colorGreen}>وارد شوید</Link>
        </div>
        <div>
            <Row className={Style.colorGreen}>
                <Col  xs={3} xl={3} sm={3} md={3}><hr /></Col>
                <Col  xs={6} xl={6} sm={6} md={6}>
                    <span>یا از این طریق ثبت نام کنید</span>
                </Col>
                <Col  xs={3} xl={3} sm={3} md={3}><hr /></Col>
            </Row>
            
       
        </div>
        <div>
        <Row>
        <Col  xs={6} xl={6} sm={6} md={6}>
             <button className={Style.border_rad}>ثبت نام از طریق گیت هاب<Link to="https://github.com"><GitHub/></Link></button>
        </Col>
        
        <Col  xs={6} xl={6} sm={6} md={6} className={Style.text_align_left}>
            <button className={Style.border_rad}>ثبت نام از طریق گوگل اکانت<Link to="https://myaccount.google.com"><Google/></Link></button>
        </Col>
        
        </Row>
           
            
            
        </div>
                </Col>
                <Col  xs={1} xl={1} sm={1} md={1}></Col>
            </Row>

        <div className={Style.hi}></div>
        </Col>
        <Col  className={Style.jan} xs={6} xl={6} sm={6} md={6}>
            
                <Row>
                    <Col className={Style.text_align_left}><span className={Style.font_size}>Hive</span><img src={IMG} alt="" /> </Col>
                </Row>
                <br></br>
                <br></br>

                <Row>
                    <Col  xs={2} xl={2} sm={2} md={2}></Col>
                        <Col  xs={9} xl={9} sm={9} md={9}>
                                <Row>
                                <Col className={Style.text_align_center}> 
                                <h3>
                                هایو، اجتمایی برای گسترش نیکوکاری
                                </h3>
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <Row>
                                <Col className={Style.text_align_center} > 
                                <p className={Style.p}>
                                                هایو، اجتمایی از نیکوکاران و نیازمندان را گردهم آورده تا با ایجاد فضایی امن و شفاف
                                از نظر مالی، فرآیند کمک گیری و کمک رسانی را هر چه بیشتر تسهیل بخشد. 🕊
                            

                                </p>
                                </Col>
                            </Row>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Row>
                            <Col  className={Style.center} xs={2} xl={2} sm={2} md={2}>
                            </Col>
                            <Col  className={Style.center} xs={2} xl={2} sm={2} md={2}>
                            </Col>
                            <Col  className={Style.center} xs={2} xl={2} sm={2} md={2}>
                            <img src={vector} alt='' />
                            </Col>
                            <Col  className={Style.center} xs={2} xl={2} sm={2} md={2}>
                            <img src={pix} alt='' />
                            </Col>
                            <Col  className={Style.center} xs={2} xl={2} sm={2} md={2}>
                            <img src={instagram} alt='' />
                            </Col>
                            <Col  className={Style.center} xs={2} xl={2} sm={2} md={2}>
                                <img src={clip3} alt='' />
                            </Col>
                            

                            </Row>
                                        
                        </Col>
                    <Col  xs={1} xl={1} sm={1} md={1}></Col>

                </Row>
      
            
        </Col>
      </Row>
      <ToastContainer/>
    </Container>
  )
}

export default SignUp
