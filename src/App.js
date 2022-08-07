import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Experience from './pages/Experience';
import Projects from './pages/Projects';
// import About from './pages/About';
import Contact from './pages/Contact';
import Email from './pages/Email';
import ProjectDisplay from './pages/ProjectDisplay';



function App() {

  return (
    <div>
      <main className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/email" element={<Email />} /> 
            {/* <Route path="/contact" element={<Contact />} />  */}
          </Routes>
            <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;