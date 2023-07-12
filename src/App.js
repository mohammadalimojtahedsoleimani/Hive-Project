import { Route , Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import PostsPage from './pages/PostsPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from "./components/NotFound/NotFoundPage";
import { CharityProvider } from "./context/CharityContext"
import PageProvider from "./context/PageProvider";
import AboutUs from "./components/AboutUs/AboutUs"
import CharityPage from "./components/charityPage/CharityPage";
import { LoginModalProvider } from "./context/LoginContext";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import EditPasswordPage from './components/EditPasswordPage/EditPasswordPage';
import { DakhelProvider } from "./context/DakhelContext";
import { ProfileProvider } from "./context/ProfileContext";
import { DonationProvider } from "./context/DonationContext";
import { SearchProvider } from "./context/SearchContext";
import MobileViewProvider from "./context/MobileContext";
import { LogoutProvider } from "./context/LogoutContext";
import { DeleteprofProvider } from "./context/DeleteprofContext";
import Activation from "./components/Activation/Activation"
import { CatidProvider } from "./context/CatidContext";

function App () {

    return (
        <MobileViewProvider>
            <PageProvider>
                <LoginModalProvider>
                    <DakhelProvider>
                        <ProfileProvider>
                            <DonationProvider>
                                <SearchProvider>
                                    <CharityProvider>
                                        <LogoutProvider>
                                            <DeleteprofProvider>
                                                <CatidProvider>
                                                    <>
                                                        <Routes>
                                                            <Route path="/" element={ <LandingPage/> }/>
                                                            <Route path="/signUp" element={ <SignUpPage/> }/>
                                                            <Route path="/editpassword"
                                                                   element={ <EditPasswordPage/> }/>
                                                            <Route path="/AboutUs" element={ <AboutUs/> }/>
                                                            <Route path="/posts/:page" element={ <PostsPage/> }/>
                                                            <Route path="/post/:page" element={ <CharityPage/> }/>
                                                            <Route path="/dashboard" element={ <DashboardPage/> }/>
                                                            <Route path="/activation" element={ <Activation/> }/>
                                                            <Route path='/*' element={ <NotFoundPage/> }/>
                                                            {/* <Route path="/page/:id" element={ <PostPage/> }/>
            <Route path="/profile" element={ <ProfilePage/> }/>
            <Route path="/Posts" element={ <PostsPage/> }/>
            <Route path="/activation/*" element={ <EmailConfigurationPage/> }/>
            <Route path="/reset_password/*" element={ <ChangePasswordPage/> }/>
            <Route path="/*" element={ <NotFoundPage/> }/> */ }
                                                        </Routes>
                                                    </>
                                                </CatidProvider>
                                            </DeleteprofProvider>
                                        </LogoutProvider>
                                    </CharityProvider>
                                </SearchProvider>
                            </DonationProvider>
                        </ProfileProvider>
                    </DakhelProvider>
                </LoginModalProvider>
            </PageProvider>
        </MobileViewProvider>
    )
}

export default App
