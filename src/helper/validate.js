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
    } else if ( data.password.length < 8) {
        errors.password = "رمز عبوری کمتر از 8 حرف است"
    } else if ( /^\d+$/.test(data.password) ){

    }
    else {
        delete errors.password
    }

    return errors;
}