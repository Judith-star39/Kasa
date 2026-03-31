import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Apropos from "./pages/a_propos";
import Page404 from "./pages/page404";
import Logement from "./pages/logement";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;