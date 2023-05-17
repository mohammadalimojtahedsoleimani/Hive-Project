import NotifBell from "../../images/DashboardPage/bell.svg";
const UserProfile = ({ profilePic, username }) => {
  return (
    <div className="flex items-center xxl:gap-[1rem]">
      <img src={profilePic} alt="profile pic" />
      <span className="font-bold text-[#777777] text-[15px] xxl:text-[20px]">
        {username}
      </span>
      <img src={NotifBell} alt="" />
    </div>
  );
};

export default UserProfile;
