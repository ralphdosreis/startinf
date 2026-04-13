import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const usuario = {
  nome: 'Doguinho Silva',
  email: 'dog@email.com',
  avatar: '/src/img/icon-doguinho.svg',
};

const IconAdmin = () => (
  <img src="/src/img/Vector.svg" width="16" height="16" alt="Admin" />
);

const IconSair = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const Header = () => {
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickFora = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownAberto(false);
      }
    };
    document.addEventListener('mousedown', handleClickFora);
    return () => document.removeEventListener('mousedown', handleClickFora);
  }, []);

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
            <li className="header-usuario" href="/chat" ref={dropdownRef}>
              <button
                className="btn-entrar" 
                onClick={() => setDropdownAberto(!dropdownAberto)}
              >Entrar
              </button>

              {dropdownAberto && (
                <div className="header-dropdown">
                  <div className="header-dropdown-perfil">
                    <img
                      src={usuario.avatar}
                      alt={usuario.nome}
                      className="header-dropdown-avatar"
                    />
                    <div className="header-dropdown-info">
                      <span className="header-dropdown-nome">{usuario.nome}</span>
                      <span className="header-dropdown-email">{usuario.email}</span>
                    </div>
                  </div>
                  <div className="header-dropdown-divisor" />
                  <button
                    className="header-dropdown-item"
                    onClick={() => { setDropdownAberto(false); navigate('/admin'); }}
                  >
                    <IconAdmin />
                    Painel de administração
                  </button>
                  <div className="header-dropdown-divisor" />
                  <button className="header-dropdown-item sair">
                    <IconSair />
                    Sair
                  </button>
                </div>
              )}
            </li>
                        <button className="botao">Cadastrar</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
