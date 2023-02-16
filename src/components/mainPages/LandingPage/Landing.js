import Footer from "../../shared/Footer";
import Navbar from "../../shared/Navbar";
import Header from "./Header";
import SelectedPosts from "./SelectedPosts";
import Steps from "./Steps";
import Trust from "./Trust";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Steps />
      <Trust />
      <SelectedPosts />
      <Footer />
    </div>
  );
};

export default LandingPage;
