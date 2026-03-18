import React from 'react';

const Header = () => {
  return (
    <>
      <header class="header-bg">
        <div class="header container">
          <div class="logo">
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
            <ul class="header-menu">
              <li>
                <a href="">Entrar</a>
              </li>
              <li>
                <a class="botao input" href="">
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
