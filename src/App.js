import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Header from './Componets/Header'; // Adjust the path if needed
import MainContent from './Componets/MainContent'; // Adjust the path if needed
import Footer from './Componets/Footer'; // Adjust the path if needed
import About from './Componets/About'; // Adjust the path if needed
import Service from './Componets/Service'; // Adjust the path if needed
import Contact from './Componets/Contact'; // Adjust the path if needed
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>  {/* Use Routes instead of Switch */}
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
