import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import { useJsApiLoader } from "@react-google-maps/api";
import { REACT_GOOGLE_MAP_API_KEY } from "./constants/constant";
import AppLayout from "./pages/appLayout";
import Blog from "./pages/blog";
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
      <Route element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Contact Us" element={<Contact isLoaded={isLoaded} />} />
        <Route path="/FAQ" element={<FAQsList />} />
        <Route path="/Blog" element={<Blog />} />
      </Route>
      <Route path="/storeDetails" element={<StoreDetails />} />
      <Route path="/categorySearch" element={<CategorySearch />} />

      {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
