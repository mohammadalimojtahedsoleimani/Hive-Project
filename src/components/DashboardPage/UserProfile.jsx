import NotifBell from "../../images/DashboardPage/bell.svg";
import { useEffect , useState } from "react";
import axios from "axios";

const UserProfile = ( { profilePic , username } ) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [avatar, setAvatar] = useState("");
    useEffect ( () => {
        let value = localStorage.getItem ( "token" );
        let idu = localStorage.getItem ( "id" );
        axios
            .get ( `http://127.0.0.1:8000/accounts/api/v1/profile/${ idu }/` , {
                headers : {
                    Authorization : `JWT ${ value }` ,
                } ,
            } )
            .then ( ( r ) => {
                setFname(r.data.first_name);
                setLname(r.data.last_name);
                setAvatar(r.data.avatar);
            } );

    } );

    return (
        <div className="flex items-center gap-2 xxl:gap-4">
            <img src={ avatar } alt="profile pic" className=" w-12"/>
            <span className="font-bold text-[#777777] text-[15px] xxl:text-[20px]">
        { fname } {lname}
      </span>
            <img src={ NotifBell } alt="" className="mr-6 w-10 xxl:mr-14"/>
        </div>
    );
};

export default UserProfile;
