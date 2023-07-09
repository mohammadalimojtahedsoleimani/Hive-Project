import Header from '../components/LandingPage/Header/Header'
import Navbar from '../components/common/Navbar/Navbar'
import AboutUs from '../components/LandingPage/AboutUS/AboutUs'
import Steps from '../components/LandingPage/Steps/Steps'
import GeneralInfo from '../components/LandingPage/GeneralInfo/GeneralInfo'
import Backup from '../components/LandingPage/Backup/Backup'
import Qualities from '../components/LandingPage/Qualities/Qualities'
import SelectedPosts from '../components/SelectedPosts/index'
import Footer from '../components/common/Footer/Footer'

type Props = {}

const LandingPage = (props: Props) => {
  
  return (
    <>
      {/*<Navbar/>*/}
      <Header/>
      <AboutUs/>
      <Steps/>
      <GeneralInfo/>
      <Backup/>
      <Qualities/>
      <SelectedPosts/>
      <Footer/>
    </>
  )
}

export default LandingPage