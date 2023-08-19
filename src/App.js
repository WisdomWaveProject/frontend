import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-datepicker/dist/react-datepicker.css';

import "flowbite";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mentor from "./pages/Mentor";
import Mentee from "./pages/Mentee";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Profile from "./pages/profile";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/mentee" element={<Mentee />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<SignIn />} />
      <Route path="/Profile" element={<Profile />} />

    </Routes>
  );
};

export default App;
