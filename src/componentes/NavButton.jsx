import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/utilidades/nav-botao.css';

const NavButton = ({ label, iconPath, to, isActive, onClick }) => {
  return (
    <Link to={to} className={`nav-button ${isActive ? 'active' : ''}`}  onClick={(e) => {
        if(!to || to === '') {
          e.preventDefault();
        }
        if (onClick) {
          onClick(e);
        }
      }}>
      <div
        className="nav-icon"
        style={{
          WebkitMaskImage: `url("${iconPath}")`,
          maskImage: `url("${iconPath}")`,
        }}
      />
      <span className="nav-label">{label}</span>
    </Link>
  );
};
export default NavButton;
