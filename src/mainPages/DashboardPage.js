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
import { useEffect , useState } from "react";
import Container from "../components/DashboardPage/Container";
import Rectangle from '../images/DashboardPage/rectangle.svg'
import axios from "axios";
const DashboardPage = () => {
    const navOptions = [{id:0, name: 'داشبورد', value: "dashboard", icon: Dashboard, activeIcon: DashboardActive}, {id: 1, name: 'آگهی های ثبت شده', value:'posts', icon: Posts, activeIcon: PostsActive}, {id: 2, name: 'اطلاعات حساب کاربری', value: 'info', icon: Info, activeIcon: InfoActive}]
    const [active, setActive] = useState("dashboard")
    useEffect(()=>{

    },[])
    return (
        <div className="flex">
            <div className="fixed top-0 left-0 w-[75vh] z-[-2]"><img src={Rectangle} alt=""/></div>
            <VerticalNavbar navOptions={navOptions} active={active} setActive={setActive}/>
            <div className="h-[100vh] flex-[6]">
                <Container active={active}/>
            </div>
            <div className="flex flex-col items-end flex-[2] pl-[2.5rem] xxl:pl-[3.5rem] pt-[2rem] xxl:pt-[3rem]">
                <UserProfile username='علیرضا محمدزاده' profilePic={SampleProfile}/>
                <div className="flex flex-col items-center">
                <MostVisitedPosts/>
                <Time/>
                </div>
            </div>
        </div>
     );
}

export default DashboardPage;