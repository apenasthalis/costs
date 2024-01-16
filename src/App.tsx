import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layouts/Container";
import Navbar from "./components/layouts/Navbar";
import Projects from "./components/pages/Projects";
import Footer from "./components/layouts/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
