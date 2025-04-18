import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { useJsApiLoader } from "@react-google-maps/api";
import { REACT_GOOGLE_MAP_API_KEY } from "./constants/constant";

import Blog from "./pages/blog";
import AboutUs from "./pages/aboutUs";
import TermsAndConditions from "./pages/termsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy";
import RefundPolicy from "./pages/refundPolicy";
import FAQsList from "./pages/FAQs/Index";
import StoreDetails from "./pages/StoreDetails/Index";
import CategorySearch from "./pages/CategorySearch/Index";

function App() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: REACT_GOOGLE_MAP_API_KEY,
    libraries: ["places"],
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      <Route path="/Contact Us" element={<Contact isLoaded={isLoaded} />} />
      <Route path="/FAQ" element={<FAQsList />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/storeDetails" element={<StoreDetails />} />
      <Route path="/categorySearch" element={<CategorySearch />} />
    </Routes>
  );
}

export default App;
