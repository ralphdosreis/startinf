import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-bg">
      <div className="header container">
        <div className="logo">
          <Link to="/">
            <img
              src="/src/img/icon-logo.svg"
              width="48px"
              height="48px"
              alt="StartInf"
            />
          </Link>
          <div>
            <h1>StartInf</h1>
            <p>Guia para Startups</p>
          </div>
        </div>
        <nav>
          <ul className="header-menu">
            <li>
              <Link to="/">Entrar</Link>
            </li>
            <li>
              <Link className="botao input" to="/">
                Cadastrar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
