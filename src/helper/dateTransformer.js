const DateTransformer = (dateOnly) => {
    let date = new Date ( `${ dateOnly }` ); // your date from API
    return date.toLocaleDateString ( 'fa-IR-u-ca-persian-nu-arab' , {
        day : 'numeric' ,
        month : 'long' ,
        year : 'numeric'
    } );

}
export default DateTransformer;