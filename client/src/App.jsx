import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import Dashboard from './components/Dashboard';
import Overview from './components/Overview';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-8 bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
