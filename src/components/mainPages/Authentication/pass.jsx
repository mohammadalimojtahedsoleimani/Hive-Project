import React from 'react'
import {HighlightOff} from "@mui/icons-material";
import {Link}  from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Style from './signup.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import clip3 from "../../../images/Authentication/sss.png";



import {ToastContainer} from "react-toastify";
function pass() {
  return (
    <Container fluid>
      
    <Row>
      
      <Col xs={6} xl={6} sm={6} md={6}>
          <Row>
              <Col  xs={1} xl={1} sm={1} md={1}></Col>
              <Col  xs={10} xl={10} sm={10} md={10}>
              <form className={Style.marginTop1}>
      <h2>رمز عبور جدید</h2>
      <br></br>
      <Row  className={Style.marginTop}> 
          <Col>
          <h5>رمز عبور جدید :</h5>
          <Form.Control type="text"   name="name"/>
         
        </Col>
        </Row>
        <br></br>
        <Row>
        <Col>
            <h5>تکرار رمز عبور جدید:</h5>
          <Form.Control type="text"  name="lastName"/>
          
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
    <div className={Style.blur}>
      <div className={Style.card}>
        <div className={Style.exitIcon}><Link to="/editpassword"> <HighlightOff/> </Link></div>
        <br></br>
        <br></br>
        <h6>رمز عبور شما با موفقیت تغییر کرد</h6>
        <br></br>
        <img  width="40" src={clip3} alt='' />
        <br></br>
        <br></br>
        <Link href='#' alt=""> 
          بازگشت به سایت
        </Link>
      </div>
    </div>
  </Container>
  )
}

export default pass
