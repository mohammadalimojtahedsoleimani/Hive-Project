import { Route , Routes } from "react-router-dom";
import LandingPage from './mainPages/LandingPage'

function App() {

  return (
    <main>
        <Routes>
            <Route path="/" element={ <LandingPage/> }/>
            {/* <Route path="/page/:id" element={ <PostPage/> }/>
            <Route path="/profile" element={ <ProfilePage/> }/>
            <Route path="/Posts" element={ <PostsPage/> }/>
            <Route path="/activation/*" element={ <EmailConfigurationPage/> }/>
            <Route path="/reset_password/*" element={ <ChangePasswordPage/> }/>
            <Route path="/*" element={ <NotFoundPage/> }/> */}
        </Routes>
    </main>
  )
}

export default App
