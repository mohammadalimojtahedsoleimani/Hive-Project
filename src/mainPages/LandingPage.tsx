import Header from '@/components/LandingPage/Header'
import Navbar from '@/components/common/Navbar'
import AboutUs from '@/components/LandingPage/AboutUS'
import Steps from '@/components/LandingPage/Steps'
import GeneralInfo from '@/components/LandingPage/GeneralInfo'
import Backup from '@/components/LandingPage/Backup'
import Qualities from '@/components/LandingPage/Qualities'
import SelectedPosts from '@/components/SelectedPosts'
import Footer from '@/components/common/Footer'

type Props = {}

const LandingPage = (props: Props) => {
  
  return (
    <>
      <Navbar/>
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