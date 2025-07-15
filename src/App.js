// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Card from './pages/Card';
import Blogs from './pages/Blogs';

export default function App() {
  return (
    <BrowserRouter basename="/fresh-juices-react-prj"> {/* 👈 Important fix */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="card" element={<Card />} />
          <Route path="blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
