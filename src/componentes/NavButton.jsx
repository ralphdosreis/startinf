import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/utilidades/nav-botao.css';

const NavButton = ({ label, iconPath, to, isActive }) => {
  return (
    <Link to={to} className={`nav-button ${isActive ? 'active' : ''}`}>
      <div
        className="nav-icon"
        style={{
          // Importante: use as aspas simples em volta da variável iconPath
          WebkitMaskImage: `url("${iconPath}")`,
          maskImage: `url("${iconPath}")`,
        }}
      />
      <span className="nav-label">{label}</span>
    </Link>
  );
};
export default NavButton;
