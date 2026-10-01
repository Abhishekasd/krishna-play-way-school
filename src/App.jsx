import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Announcements from './pages/Announcements';
import Timetable from './pages/Timetable';
import Academics from './pages/Academics';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Scroll to top on route change component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main className="main-content" style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

export default App;

