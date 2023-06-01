import Logo from "../../images/DashboardPage/logo.svg";
import Logout from "../../images/DashboardPage/logout.svg";
const VerticalNavbar = ({ navOptions, active, setActive }) => {
  return (
    <div className="flex-[1.4] vertical_navbar bg-[#F2F2F2] pt-[2rem] xxl:pt-[3rem] min-h-[100vh]">
      <div className="flex items-center justify-center logo">
        <span className="font-IrishGrover text-[#3B8174] text-[30px] xxl:text-[39px]">
          Hive
        </span>
        <img src={Logo} alt="" className="w-[4rem] xxl:w-[5.5rem]" />
      </div>
      <ul className="mt-10 xxl:mt-16">
        {navOptions.map((navOption) => (
          <li
            onClick={() => {
              setActive(navOption.value);
            }}
            style={{
              backgroundColor: `${
                active === navOption.value ? "#3B8174" : "#F2F2F2"
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
      <div className="flex text-[14px] xxl:text-[18px] p-2 xxl:p-4 gap-2 xxl:gap-4 text-[#A65959] mr-2 xxl:mr-4 mt-20 xxl:mt-32">
        <img src={Logout} alt="" />
        <span>خروج از حساب کاربری</span>
      </div>
    </div>
  );
};

export default VerticalNavbar;
