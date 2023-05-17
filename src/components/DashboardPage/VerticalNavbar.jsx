import Logo from "../../images/DashboardPage/logo.svg";
import Logout from "../../images/DashboardPage/logout.svg";
const VerticalNavbar = ({ navOptions, active, setActive }) => {
  return (
    <div className="flex-1 vertical_navbar">
      <div className="flex logo">
        <span>Hive</span>
        <img src={Logo} alt="" />
      </div>
      <ul>
        {navOptions.map((navOption) => (
          <li
            onClick={() => {
              setActive(navOption.value);
            }}
            style={{
              backgroundColor: `${
                active === navOption.value ? "#3B8174" : "white"
              }`,
            }}
            className="flex"
          >
            <img
              src={
                active === navOption.value
                  ? navOption.activeIcon
                  : navOption.icon
              }
              alt=""
            />
            <span>{navOption.name}</span>
          </li>
        ))}
      </ul>
      <div className="flex">
        <img src={Logout} alt="" />
        <span>خروج از حساب کاربری</span>
      </div>
    </div>
  );
};

export default VerticalNavbar;
