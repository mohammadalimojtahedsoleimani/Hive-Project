import NotifBell from "../../images/DashboardPage/bell.svg";
const UserProfile = ({ profilePic, username }) => {
  return (
    <div className="flex items-center gap-2 xxl:gap-4">
      <img src={profilePic} alt="profile pic" className=" w-12" />
      <span className="font-bold text-[#777777] text-[15px] xxl:text-[20px]">
        {username}
      </span>
      <img src={NotifBell} alt="" className="mr-6 w-10 xxl:mr-14" />
    </div>
  );
};

export default UserProfile;
