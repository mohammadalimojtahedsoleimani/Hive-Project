import { redirect , Route , Routes } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import PostsPage from './pages/PostsPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from "./pages/NotFoundPage";
import { CharityProvider } from "./context/CharityContext"
import PageProvider from "./context/PageProvider";
import AboutUs from "./pages/AboutUs"
import CharityPage from "./pages/CharityPage";
import { LoginModalProvider } from "./context/LoginContext";
import SignUpPage from "./pages/SignUpPage";
import EditPasswordPage from './pages/EditPasswordPage';
import { DakhelProvider } from "./context/DakhelContext";
import { ProfileProvider } from "./context/ProfileContext";
import { DonationProvider } from "./context/DonationContext";
import { SearchProvider } from "./context/SearchContext";
import MobileViewProvider from "./context/MobileContext";
import { LogoutProvider } from "./context/LogoutContext";
import { DeleteprofProvider } from "./context/DeleteprofContext";
import Activation from "./pages/Activation"
import { CatidProvider } from "./context/CatidContext";
import GetEmail from "./pages/GetEmail";
import UseScrollToTop from "./hooks/use-scroll-to-top";
function App () {
    const isLoggedIn = localStorage.getItem('token') !== null;

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
                                                <UseScrollToTop>
                                                    <>
                                                        <Routes>
                                                            <Route path="/" element={ <LandingPage/> }/>
                                                            <Route path="/signUp" element={ <SignUpPage/> }/>
                                                            <Route path="/reset-password/*"
                                                                   element={ <EditPasswordPage/> }/>
                                                            <Route path="/AboutUs" element={ <AboutUs/> }/>
                                                            <Route path="/posts/:page" element={ <PostsPage/> }/>
                                                            <Route path="/post/:page" element={ <CharityPage/> }/>
                                                            <Route path="/dashboard">
                                                                <Route path="general" element={ isLoggedIn ? <DashboardPage active="general"/>:<NotFoundPage/> }/>
                                                                <Route path="posts" element={ isLoggedIn ? <DashboardPage active="posts"/>:<NotFoundPage/> }/>
                                                                <Route path="info" element={ isLoggedIn ? <DashboardPage active="info"/>:<NotFoundPage/> }/>
                                                            </Route>
                                                            <Route path="/activation" element={ <Activation/> }/>
                                                            <Route exact path="/getEmail"  element={ <GetEmail/> }/>
                                                            <Route path='/*' element={ <NotFoundPage/> }/>
                                                            {/* <Route path="/page/:id" element={ <PostPage/> }/>
            <Route path="/profile" element={ <ProfilePage/> }/>
            <Route path="/Posts" element={ <PostsPage/> }/>
            <Route path="/activation/*" element={ <EmailConfigurationPage/> }/>
            <Route path="/reset_password/*" element={ <ChangePasswordPage/> }/>
            <Route path="/*" element={ <NotFoundPage/> }/> */ }
                                                        </Routes>
                                                    </>
                                                    </UseScrollToTop>
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
