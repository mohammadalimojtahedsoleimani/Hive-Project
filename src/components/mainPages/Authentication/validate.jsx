const validate = (data, type) =>{
    const errors ={};
  
    if(!data.email){
        errors.email ="";
    }if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "";
    } else {
        delete errors.email
    }
    if(!data.password){
        errors.password = "رمز تان را وارد کنید"
    }if (data.password.length < 8) {
        errors.password = "رمز حداقل 8 حرف باشد"
    } else {
        delete errors.password
    }
   
    if(type === "SignUp"){
        if(!data.name.trim()){
            errors.name = "";
        }else{
            delete errors.name
        }
        if(!data.lastName.trim()){
            errors.lastName = "";
        }else{
            delete errors.lastName
        }
        if(data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted = ">قوانین و مقررات هایو را تایید کنید ."
        }
    }
   
    return errors;
}
export default validate;