import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Invoice from "./components/invoice";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<h1>hello</h1>} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/contact" element={<>Contact</>} />
        </Routes>
      </Router>
    </>
  );
}
