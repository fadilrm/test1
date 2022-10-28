import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Page/Home';
import Profile from './Page/Profile';
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import ForgotPassword from './Page/ForgotPassword';
import Offers from './Page/Offers';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Sign-In" element={<SignIn/>} />
        <Route path="/Sign-Up" element={<SignUp/>} />
        <Route path="/Forgot-Password" element={<ForgotPassword/>} />
        <Route path="/Offers" element={<Offers/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
