import './App.css'


import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Utenti from './pages/utenti';
import Test from './pages/test';      // ← import
import Pagin1 from './pages/pagin1';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/utenti" element={<Utenti />} />
         <Route path="/test" element={<Test />} />       {/* nuova route */}
        <Route path="/pagin1" element={<Pagin1 />} />
      </Routes>
    </Router>
  );
}
