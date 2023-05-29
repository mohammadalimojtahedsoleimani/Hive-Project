import React from 'react'
import { useState, useEffect} from 'react';
import validate1 from "./validate1"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {notify} from "./toast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './signup.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ForgetPass() {
        const [data, setData] = useState({
            password: "",
            confirmPassword: "",
        })
        const [toched, setToched] = useState ({});
        const [errors, setErrors] = useState ({});
        useEffect(() =>{
            setErrors(validate1(data, "ForgetPass"))
           
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
                if(!Object.keys(errors).length ){
                    notify("لینک بازیابی کلمه عبور به ایمیل شما ارسال شد", "success")
                    window.location.replace('/pass');
                }
                else{
                    notify(" ! رمز عبور مطابقت ندارد", "error")
                    setToched({
                        
                        password: true,
                        confirmPassword: true
                         
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
      <h2>رمز عبور جدید</h2>
      <br></br>
      <Row  className={Style.marginTop}> 
          <Col>
          <h5>رمز عبور جدید :</h5>
          <Form.Control type="password"   name="password"  value={data.password}onChange={changeHandler} onFocus=
          {focusHandler}/>
         {errors.password && toched.password && <span>{errors.password}</span>}
        </Col>
        </Row>
        <br></br>
        <Row>
        <Col>
            <h5>تکرار رمز عبور جدید:</h5>
          <Form.Control type="password"  name="confirmPassword"  value={data.confirmPassword}onChange={changeHandler}onFocus={focusHandler}/>
          {errors.confirmPassword && toched.confirmPassword && <span>{errors.confirmPassword}</span>}
          </Col>
      
          
      </Row>
     
      
     
      

      <Row>
      <Col className={Style.marginTop}>
      <div className="d-grid gap-2">
          <Button type='submit' variant="success"  size="sm">بررسی تغییرات</Button>
      </div>
      </Col>
      </Row>
     
    </form>

     
     
              </Col>
              <Col  xs={1} xl={1} sm={1} md={1}></Col>
          </Row>

      <div className={Style.hi2}></div>

      </Col>
      <Col  className={Style.jan} xs={6} xl={6} sm={6} md={6}>
          <div className={Style.jan2}>

          </div>
             
      </Col>
    </Row>
    <ToastContainer/>
  </Container>
  )
}

export default ForgetPass

