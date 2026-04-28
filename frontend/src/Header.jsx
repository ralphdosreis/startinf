import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Login from './componentes/Login/Login';
import { useAuth } from './contexts/AuthContext';



const IconAdmin = () => (
  <img src="/src/img/Vector.svg" width="16" height="16" alt="Admin" />
);

const IconSair = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const Header = () => {
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoggedIn, isAdmin, logout } = useAuth();

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
              {isLoggedIn && user ? (
                <img
                  src={user.avatar}
                  alt={user.nome}
                  style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
                  onClick={() => setDropdownAberto(!dropdownAberto)}
                />
              ) : (
                <button
                  className="btn-entrar"
                  onClick={() => navigate('/login', { state: { background: location } })}
                >Entrar
                </button>
              )}

              {dropdownAberto && isLoggedIn && (
                <div className="header-dropdown">
                  <div className="header-dropdown-perfil">
                    <img
                      src={user.avatar}
                      alt={user.nome}
                      className="header-dropdown-avatar"
                    />
                    <div className="header-dropdown-info">
                      <span className="header-dropdown-nome">{user.nome}</span>
                      <span className="header-dropdown-email">{user.email}</span>
                    </div>
                  </div>
                  {isAdmin && (
                    <>
                      <div className="header-dropdown-divisor" />
                      <button
                        className="header-dropdown-item"
                        onClick={() => { setDropdownAberto(false); navigate('/admin'); }}
                      >
                        <IconAdmin />
                        Painel de administração
                      </button>
                    </>
                  )}
                  <div className="header-dropdown-divisor" />
                  <button className="header-dropdown-item sair" onClick={() => { logout(); setDropdownAberto(false); navigate('/'); }}>
                    <IconSair />
                    Sair
                  </button>
                </div>
              )}
            </li>
            {!isLoggedIn && (
              <button onClick={() => navigate('/login/criar', { state: { background: location } })} className="botao">Cadastrar</button>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
