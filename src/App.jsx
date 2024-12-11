import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the page components
import Home from './pages/Home.jsx';
import About from './pages/about.jsx';
import Hobbies from './pages/Hobbies.jsx';
import Contact from './pages/Contact.jsx';
import Education from './pages/Educ.jsx';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
        <Route
          path="*"
          element={<h2>404: Page Not Found</h2>} // Catch-all route for unmatched paths
        />
      </Routes>
    </Router>
  );
}

export default App;
