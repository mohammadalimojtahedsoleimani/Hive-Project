import React,{useState, useEffect} from 'react'
import {HighlightOff} from "@mui/icons-material";
import validate from "./validate";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toast";
import { Link } from 'react-router-dom';
function Login() {
    const [data, setData] = useState({
        email: "",
        password: "",
       
    })
    const [errors, setErrors] = useState ({});
    const [toched, setToched] = useState ({});

    useEffect(() =>{
        setErrors(validate(data, "Login"))
       
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
                
                email: true,
                password: true,
                 
            })
        }
    }
    
  return (
    <div>
      <HighlightOff/>
      <form onSubmit={submitHandler}>
        <h2>ورود</h2>
        <div>
            <input type="text" name="email" value={data.email}onChange={changeHandler} onFocus={focusHandler}/>
            {errors.email && toched.email&& <span>{errors.email}</span>}
        </div>
        <div>
            <input type="password" name="password" value={data.password}onChange={changeHandler} onFocus={focusHandler}/>
            {errors.password && toched.password && <span>{errors.password}</span>}
        </div>
        <div>
            <button type="submit">ورود</button>
            <Link to='#'>رمز عبور خود را فراموش کرده ام.</Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login