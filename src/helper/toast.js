import { toast } from 'react-toastify';


export const notify = ( text , type ) => {
    const zIndex = 10000;
    if ( type === "success" ) {
        toast.success ( text,{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            zIndex:{zIndex},
        } );
    } else if ( type === "info" ) {
        toast.info ( text,{
            autoClose: 2000,
        } )
    } else {
        toast.error ( text,{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            zIndex:{zIndex},

        } )
    }
};