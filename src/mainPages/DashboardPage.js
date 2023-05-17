import VerticalNavbar from "../components/DashboardPage/VerticalNavbar";
import Dashboard from '../images/DashboardPage/dashboard.svg'
import DashboardActive from '../images/DashboardPage/dashboard_active.svg'
import Posts from '../images/DashboardPage/posts.svg'
import PostsActive from '../images/DashboardPage/posts_active.svg'
import Info from '../images/DashboardPage/info.svg'
import InfoActive from '../images/DashboardPage/info_active.svg'
import SampleProfile from '../images/DashboardPage/sample_profile.png'
import UserProfile from "../components/DashboardPage/UserProfile";
import MostVisitedPosts from "../components/DashboardPage/MostVisitedPosts";
import Time from "../components/DashboardPage/Time";
import { useState } from "react";
import Container from "../components/DashboardPage/Container";
const DashboardPage = () => {
    const navOptions = [{id:0, name: 'داشبورد', value: "dashboard", icon: Dashboard, activeIcon: DashboardActive}, {id: 1, name: 'آگهی های ثبت شده', value:'posts', icon: Posts, activeIcon: PostsActive}, {id: 2, name: 'اطلاعات حساب کاربری', value: 'info', icon: Info, activeIcon: InfoActive}]
    const [active, setActive] = useState("dashboard")
    return ( 
        <div className="flex pt-[2rem] xxl:pt-[3rem]">
            <VerticalNavbar navOptions={navOptions} active={active} setActive={setActive}/>
            <div className=" flex-[6]">
                <Container active={active}/>
            </div>
            <div className="flex flex-col items-end flex-[2] pl-[2rem] xxl:pl-[3rem]">
                <UserProfile username='علیرضا محمدزاده' profilePic={SampleProfile}/>
                <MostVisitedPosts/>
                <Time/>
            </div>
        </div>
     );
}
 
export default DashboardPage;