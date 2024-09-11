import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white h-16 flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">F__T</h1>
      <div className="flex items-center space-x-4">
        <Link to={"/profile"} className="hover:text-gray-300">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
