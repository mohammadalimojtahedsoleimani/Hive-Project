export const validate = ( data ) => {
    const errors = {};

    if ( ! data.email ) {
        errors.email = "ایمیل ضروری است";
    } else if ( ! /\S+@\S+\.\S+/.test ( data.email ) ) {
        errors.email = "آدرس ایمیل درست نیست"
    } else {
        delete errors.email;
    }
    if ( ! data.password ) {
        errors.password = "رمز عبور ضروری است"
    } else if ( data.password.length < 8 || /^\d+$/.test(data.password) ) {
        errors.password = "رمز عبور بسیار ساده میباشد."
    }else {
        delete errors.password
    }
    if ( !data.password1 ){
        errors.password1 = 'تکرار رمز عبور ضروری است'
    }else if ( data.password !== data.password1 ){
        errors.password1 = 'تکرار رمز عبور با رمز عبور مطابقت ندارد.'
    } else {
        delete errors.password1
    }

    return errors;
}