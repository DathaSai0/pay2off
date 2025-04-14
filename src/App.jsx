import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { useJsApiLoader } from "@react-google-maps/api";
import { REACT_GOOGLE_MAP_API_KEY } from "./constants/constant";
import AppLayout from "./pages/appLayout";
import FAQsList from "./pages/FAQs/FAQ";
import Blog from "./pages/blog";

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/contact" element={<Contact isLoaded={isLoaded} />} />
      <Route path="/FAQs" element={<FAQsList />} />
      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    // </Router>
  );
}

export default App;
