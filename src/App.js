import Header from "./Layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Sites/LandingPage";
import About from "./Sites/About";
import Contact from "./Sites/Contact";
import Footer from "./Layout/Footer"; 
import Products from "./Sites/Products";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
