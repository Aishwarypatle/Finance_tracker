import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col p-4">
      <ul className="space-y-4">
        <li><Link to="/" className="text-lg hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="/overview" className="text-lg hover:text-gray-300">Overview</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
