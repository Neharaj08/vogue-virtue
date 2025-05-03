import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate("/signin");
  };

  return (
    <header className="header">
      <h2 className="logo">VogueVirtue</h2>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {isAuthenticated && <Link to="/dashboard">Dashboard</Link>}
      </nav>
      {isAuthenticated && (
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      )}
    </header>
  );
};

export default Header;
