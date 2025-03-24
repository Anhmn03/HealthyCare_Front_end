// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './app.css';
import ListMedicine from './components/ListMedicine';
import MedicinesDetail from './components/MedicinesDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/buy-medicines" element={<ListMedicine />} />
          <Route path="/medicine/:id" element={<MedicinesDetail />} />

          {/* Nếu bạn có các route khác, có thể thêm ở đây */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;