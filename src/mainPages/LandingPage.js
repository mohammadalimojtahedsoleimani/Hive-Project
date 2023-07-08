import Header from '../components/LandingPage/Header/Header'
import Navbar from '../components/common/Navbar/Navbar'
import AboutUs from '../components/LandingPage/AboutUS/AboutUs'
import Steps from '../components/LandingPage/Steps/Steps'
import GeneralInfo from '../components/LandingPage/GeneralInfo/GeneralInfo'
import Backup from '../components/LandingPage/Backup/Backup'
import Qualities from '../components/LandingPage/Qualities/Qualities'
import SelectedPosts from '../components/LandingPage/SelectedPosts/SelectedPosts'
import Footer from '../components/common/Footer/Footer'
import { useContext , useEffect } from "react";
import axios from "axios";
import { DakhelContext } from "../context/DakhelContext";

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

    return (
        <>
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