import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header-bg">
        <div className="header container">
          <div className="logo">
            <a href="./index.html">
              <img
                src="/src/img/icon-logo.svg"
                width="48px"
                height="48px"
                alt="StartInf"
              />
            </a>
            <div>
              <h1>StartInf</h1>
              <p>Guia para Startups</p>
            </div>
          </div>
          <nav>
            <ul className="header-menu">
              <li>
                <a href="">Entrar</a>
              </li>
              <li>
                <a className="botao input" href="">
                  Cadastrar
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
