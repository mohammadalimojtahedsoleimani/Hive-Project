import { Route , Routes } from "react-router-dom";
import LandingPage from './mainPages/LandingPage'
import PostsPage from './mainPages/PostsPage';
import DashboardPage from './mainPages/DashboardPage';
import PostPage from './mainPages/PostPage'
import NotFoundPage from "./components/mainPages/NotFound/NotFoundPage";
import CharityProvider from "./context/CharityProvider"
import PageProvider from "./context/PageProvider";
import Login from './components/mainPages/Authentication/Login';
import SignUp from "./components/mainPages/Authentication/SignUp";
import ForgetPass from "./components/mainPages/Authentication/ForgetPass"
import Pass from './components/mainPages/Authentication/pass';
import AboutUs from "./components/mainPages/AboutUs/AboutUs"
import CharityPage from "./components/mainPages/charityPage/CharityPage";
function App () {

    return (
        <PageProvider>


            <>
                <CharityProvider>

                    <Routes>
                        <Route path="/" element={ <LandingPage/> }/>
                        <Route path="/signUp" element={ <SignUp/> }/>
                        {/*<Route path="/login" element={<Login/>}/>*/ }
                        <Route path="/editpassword" element={ <ForgetPass/> }/>
                        {/*<Route path='/pass' element={<Pass/>}/>*/ }
                        <Route path="/AboutUs" element={ <AboutUs/> }/>
                        <Route path="/posts/:page" element={ <PostsPage/> }/>
                        <Route path="/post" element={ <CharityPage/> }/>
                        <Route path="/dashboard" element={ <DashboardPage/> }/>
                        <Route path='/*' element={ <NotFoundPage/> }/>

                        {/* <Route path="/page/:id" element={ <PostPage/> }/>
            <Route path="/profile" element={ <ProfilePage/> }/>
            <Route path="/Posts" element={ <PostsPage/> }/>
            <Route path="/activation/*" element={ <EmailConfigurationPage/> }/>
            <Route path="/reset_password/*" element={ <ChangePasswordPage/> }/>
            <Route path="/*" element={ <NotFoundPage/> }/> */ }
                    </Routes>
                </CharityProvider>
            </>
        </PageProvider>
    )
}

export default App
