import Logo from "../../assets/images/DashboardPage/logo.svg";
import Logout from "../../assets/images/DashboardPage/logout.svg";
import Delete from "../../assets/images/DashboardPage/delete.svg";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DakhelContext } from "../../context/DakhelContext";
import { LogoutContext } from "../../context/LogoutContext";
import LogOut from "../modal/LogOut/LogOut";
import DeleteProfile from "../modal/DeleteProfile/DeleteProfile";
import { DeleteprofContext } from "../../context/DeleteprofContext";

const BUTTON_WRAPPER_LOGOUT_STYLES = {
  position: "relative",
  zIndex: 1,
};
const BUTTON_WRAPPER_DELETEPROFILE_STYLES = {
  position: "relative",
  zIndex: 2,
};
const VerticalNavbar = ({ navOptions, active, setActive }) => {
  // variables
  const navigate = useNavigate();
  const { setIsIn } = useContext(DakhelContext);
  const { isLogOpen, setIsLogOpen } = useContext(LogoutContext);
  const { isDelOpen, setIsDelOpen } = useContext(DeleteprofContext);
  const value = localStorage.getItem("token");
  // functions
  const logOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/");
    console.log("salam");
    setIsIn(false);
  };
  return (
    <div className="flex-[1.4] vertical_navbar bg-[#F2F2F2] pt-[2rem] xxl:pt-[3rem] min-h-[100vh]">
      <Link to="/">
        <div className="flex items-center justify-center logo">
          <span className="font-IrishGrover text-[#4D7AD2] text-[30px] xxl:text-[39px]">
            Hive
          </span>
          <img src={Logo} alt="" className="w-[4rem] xxl:w-[5.5rem]" />
        </div>
      </Link>
      <ul className="mt-10 xxl:mt-16">
        {navOptions.map((navOption) => (
          <li
            onClick={() => {
              navigate(`/dashboard/${navOption.value}`);
            }}
            style={{
              backgroundColor: `${
                active === navOption.value ? "#4D7AD2" : "#F2F2F2"
              }`,
              color: `${active === navOption.value ? "white" : "#808080"}`,
            }}
            className=" cursor-pointer flex text-[14px] xxl:text-[18px] p-2 xxl:p-4 gap-2 xxl:gap-4 m-2 xxl:m-4 rounded-sm"
          >
            <img
              src={
                active === navOption.value
                  ? navOption.activeIcon
                  : navOption.icon
              }
              alt=""
              className="w-5 xxl:w-8"
            />
            <span>{navOption.name}</span>
          </li>
        ))}
      </ul>

      <div
        className="flex text-[14px] xxl:text-[18px] p-2 xxl:p-4 gap-2 xxl:gap-4 text-[#A65959] mr-2 xxl:mr-4 mt-20 xxl:mt-32 cursor-pointer"
        style={BUTTON_WRAPPER_LOGOUT_STYLES}
      >
        <img src={Logout} alt="axe logout" />
        <span onClick={() => setIsLogOpen(true)}>خروج از حساب کاربری</span>
        <LogOut
          token={value}
          open={isLogOpen}
          closeModal={() => setIsLogOpen(false)}
        ></LogOut>
      </div>
      <div
        className="flex text-[14px] xxl:text-[18px] p-2 xxl:p-4 gap-2 xxl:gap-4 text-[#A65959] mr-2 xxl:mr-4 mt-20 xxl:mt-32 cursor-pointer"
        style={BUTTON_WRAPPER_DELETEPROFILE_STYLES}
      >
        <img src={Delete} alt="" className="w-[20px] xxl:w-[24px]" />
        <span onClick={() => setIsDelOpen(true)}>حذف حساب کاربری</span>
        <DeleteProfile
          open={isDelOpen}
          closeModal={() => setIsDelOpen(false)}
        ></DeleteProfile>
      </div>
    </div>
  );
};

export default VerticalNavbar;
