import NotifBell from "../../assets/images/DashboardPage/bell.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL, { ACCOUNTS } from "../../Config/ApiConfig";

const UserProfile = ({ profilePic, username }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(() => {
    let value = localStorage.getItem("token");
    let idu = localStorage.getItem("id");
    axios
      .get(BASE_URL + ACCOUNTS.PROFILE + `${idu}/`, {
        headers: {
          Authorization: `JWT ${value}`,
        },
      })
      .then((r) => {
        setFname(r.data.first_name);
        setLname(r.data.last_name);
        setAvatar(r.data.avatar);
      });
  });

  return (
    <div className="flex items-center gap-2 xxl:gap-4">
      <div
        className=" w-12 h-12 rounded-[50%]"
        style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover" }}
      ></div>
      {/* <img
        src={avatar}
        alt="profile pic"
        className=" w-12 h-12 rounded-[50%]"
      /> */}
      <span className="font-bold text-[#777777] text-[15px] xxl:text-[20px]">
        {fname} {lname}
      </span>
      <img src={NotifBell} alt="" className="w-10 mr-6 xxl:mr-14" />
    </div>
  );
};

export default UserProfile;
