import { BrowserRouter, Routes, Route } from "react-router-dom";

import "flowbite";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Mentor from "./pages/Mentor";
import Mentee from "./pages/Mentee";

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
    </Routes>
  );
};

export default App;
