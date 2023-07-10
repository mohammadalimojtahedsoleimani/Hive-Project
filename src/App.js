import { Route , Routes } from "react-router-dom";
import LandingPage from './mainPages/LandingPage'
import PostsPage from './mainPages/PostsPage';
import DashboardPage from './mainPages/DashboardPage';
import PostPage from './mainPages/PostPage'
import NotFoundPage from "./components/mainPages/NotFound/NotFoundPage";
import { CharityProvider } from "./context/CharityContext"
import PageProvider from "./context/PageProvider";
import Login from './components/mainPages/Authentication/Login';
import Pass from './components/mainPages/Authentication/pass';
import AboutUs from "./components/mainPages/AboutUs/AboutUs"
import CharityPage from "./components/mainPages/charityPage/CharityPage";
import { LoginModalProvider } from "./context/LoginContext";
import SignUpPage from "./components/SignUpPage/SignUpPage";
import EditPasswordPage from './components/EditPasswordPage/EditPasswordPage';
import { DakhelProvider } from "./context/DakhelContext";
import { ProfileProvider } from "./context/ProfileContext";
import { DonationProvider } from "./context/DonationContext";
import { SearchProvider } from "./context/SearchContext";
import MobileViewProvider from "./context/MobileContext";

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
                                    <>
                                        <Routes>
                                            <Route path="/" element={ <LandingPage/> }/>
                                            <Route path="/signUp" element={ <SignUpPage/> }/>
                                            <Route path="/editpassword" element={ <EditPasswordPage/> }/>
                                            <Route path="/AboutUs" element={ <AboutUs/> }/>
                                            <Route path="/posts/:page" element={ <PostsPage/> }/>
                                            <Route path="/post/:page" element={ <CharityPage/> }/>
                                            <Route path="/dashboard" element={ <DashboardPage/> }/>
                                            <Route path='/*' element={ <NotFoundPage/> }/>
                                            {/* <Route path="/page/:id" element={ <PostPage/> }/>
            <Route path="/profile" element={ <ProfilePage/> }/>
            <Route path="/Posts" element={ <PostsPage/> }/>
            <Route path="/activation/*" element={ <EmailConfigurationPage/> }/>
            <Route path="/reset_password/*" element={ <ChangePasswordPage/> }/>
            <Route path="/*" element={ <NotFoundPage/> }/> */ }
                                        </Routes>
                                    </>
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
