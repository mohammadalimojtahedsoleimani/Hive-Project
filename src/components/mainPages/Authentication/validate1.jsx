const validate1 = (data, type) =>{
    const errors ={};
    if(!data.password){
        errors.password = "رمز تان را وارد کنید"
    }if (data.password.length < 8 && !/\S+@\S+\.\S+/.test(data.password)) {
        errors.password = "رمز حداقل 8 حرف باشد"
    } else {
        delete errors.password
    }
    if (!data.confirmPassword) {
        errors.confirmPassword = "رمز عبور مطابقت ندارد"
    } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "رمز عبور مطابقت ندارد"
    } else {
        delete errors.confirmPassword
    }
    return errors;
}
export default validate1
