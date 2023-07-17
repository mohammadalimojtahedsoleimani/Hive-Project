import VerticalNavbar from "../../components/DashboardPage/VerticalNavbar";
import Dashboard from '../../assets/images/DashboardPage/dashboard.svg'
import DashboardActive from '../../assets/images/DashboardPage/dashboard_active.svg'
import Posts from '../../assets/images/DashboardPage/posts.svg'
import PostsActive from '../../assets/images/DashboardPage/posts_active.svg'
import Info from '../../assets/images/DashboardPage/info.svg'
import InfoActive from '../../assets/images/DashboardPage/info_active.svg'
import SampleProfile from '../../assets/images/DashboardPage/sample_profile.png'
import UserProfile from "../../components/DashboardPage/UserProfile";
import MostVisitedPosts from "../../components/DashboardPage/MostVisitedPosts";
import Time from "../../components/DashboardPage/Time";
import { useContext , useEffect , useState } from "react";
import Container from "../../components/DashboardPage/Container";
import Rectangle from '../../assets/images/DashboardPage/rectangle.svg'
import axios from "axios";
import { LoginModalContext } from "../../context/LoginContext";
import Login from "../../components/modal/Login/Login";
const BUTTON_WRAPPER_LOGIN_STYLES = {
    position: "relative",
    zIndex : 1 ,
};
const DashboardPage = ({active}) => {
    // variables
    const { isOpenLogin, setIsOpenLogin } = useContext(LoginModalContext);
    const navOptions = [{id:0, name: 'داشبورد', value: "general", icon: Dashboard, activeIcon: DashboardActive}, {id: 1, name: 'آگهی های ثبت شده', value:'posts', icon: Posts, activeIcon: PostsActive}, {id: 2, name: 'اطلاعات حساب کاربری', value: 'info', icon: Info, activeIcon: InfoActive}]
    // const [active, setActive] = useState("dashboard")
    return (
        <div className="flex" style={BUTTON_WRAPPER_LOGIN_STYLES}>
            <div className="fixed top-0 left-0 w-[75vh] z-[-2]"><img src={Rectangle} alt=""/></div>
            <VerticalNavbar navOptions={navOptions} active={active}
            //  setActive={setActive}
             />
            <div className="h-[100vh] flex-[6]">
                <Container active={active}/>
            </div>
            <div className="flex relative min-h-[100vh] flex-col items-end flex-[2] pl-[2.5rem] xxl:pl-[3.5rem] pt-[2rem] xxl:pt-[3rem]">
                <UserProfile username='علیرضا محمدزاده' profilePic={SampleProfile}/>
                <div className="flex flex-col items-center">
                <MostVisitedPosts/>
                <Time/>
                </div>
            </div>
            <Login open={isOpenLogin}>

            </Login>
        </div>
     );
}

export default DashboardPage;