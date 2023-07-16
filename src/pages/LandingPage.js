import Header from '../components/LandingPage/Header/Header'
import HeaderMobile from '../components/LandingPage/HeaderMobile/HeaderMobile'
import Navbar from '../components/common/Navbar/Navbar'
import AboutUs from '../components/LandingPage/AboutUS/AboutUs'
import Steps from '../components/LandingPage/Steps/Steps'
import GeneralInfo from '../components/LandingPage/GeneralInfo/GeneralInfo'
import Backup from '../components/LandingPage/Backup/Backup'
import Qualities from '../components/LandingPage/Qualities/Qualities'
import SelectedPosts from '../components/LandingPage/SelectedPosts/SelectedPosts'
import Footer from '../components/common/Footer/Footer'
import { useContext , useEffect } from "react";
import { DakhelContext } from "../context/DakhelContext";
import { MobileViewContext } from '../context/MobileContext'
import MobileNavbar from '../components/common/MobileNavbar/MobileNavbar'
import MobileFooter from '../components/common/MobileFooter/MobileFooter'
import SelectedPostsMobile from '../components/LandingPage/SelectedPostsMobile/SelectedPostsMobile'
import AboutUsMobile from '../components/LandingPage/AboutUsMobile/AboutUsMobile'
import { useLocation } from 'react-router-dom'

const LandingPage = ( props ) => {
    const { isIn , setIsIn } = useContext ( DakhelContext );
    useEffect ( () => {
        const value = localStorage.getItem("token");


        // if ( value || isIn  )
        // axios.get ( "http://127.0.0.1:8000/accounts/api/v1/profile/",{
        //     headers: {
        //         Authorization: `Bearer ${value}`
        //     }
        // } )
        //     .then (  r =>console.log(r) )
    },[isIn] )
    
    
    const isMobile = useContext(MobileViewContext)
    return (
        isMobile?
        <>
            <MobileNavbar active='home' isLogin={false} dark={true}/>
            <HeaderMobile/>
            <SelectedPostsMobile/>
            <AboutUsMobile/>
            {/* <Steps/>
            <GeneralInfo/>
            <Backup/>
            <Qualities/> */}
            <MobileFooter/>
        </> : <>
        <Navbar active='home' isLogin={false} dark={true}/>
         <Header/>
        <SelectedPosts/>
        <AboutUs/>
        <Steps/>
        <GeneralInfo/>
        <Backup/>
        <Qualities/>
        
        <Footer/>
    </>
    )
}

export default LandingPage