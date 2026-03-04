import './App.css'


import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Utenti from './pages/utenti';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utenti" element={<Utenti />} />
      </Routes>
    </Router>
  );
}
