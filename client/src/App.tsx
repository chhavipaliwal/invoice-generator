import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoice from "./components/invoice";
import Navbar from "./components/home/navbar";
import Home from "./components/home";
import Footer from "./components/home/footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <Router>
        <Routes>
          {/* <Route path="/" element={<Hom />} /> */}
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </Router>
    </>
  );
}
