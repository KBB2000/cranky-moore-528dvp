import React from "react";

import "../styles.css";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar">
      <input
        type="text"
        placeholder="Search posts by title..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
