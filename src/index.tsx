import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import App from './App';
import Album from './Album';

const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/album/:id" element={<Album />}></Route>
      </Routes>
    </Router>
  </StrictMode>
);
