import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pricavy from './pages/Privacy';
import Impressum from './pages/Impressum';

function App() {
  return (
    <Router>
          <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Pricavy />} />
          <Route path="/impressum" element={<Impressum />} />
        </Routes>
      </main>
        <Footer />
    </Router>
  );
}

export default App;