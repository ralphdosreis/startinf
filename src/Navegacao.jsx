import React from 'react';
import { useLocation } from 'react-router-dom'; // IMPORTAÇÃO CORRETA
import NavButton from './componentes/NavButton';

import iconTopicos from './img/icon-topicos.svg';
import iconChat from './img/icon-chat.svg';

const Navegacao = () => {
  const location = useLocation();

  return (
    <section className="nav-bg">
      <div className="nav container">
        <NavButton
          label="Explorar Tópicos"
          iconPath={iconTopicos}
          to="/"
          isActive={location.pathname === '/'}
        />
        <NavButton
          label="Chat"
          iconPath={iconChat}
          to="/chat"
          isActive={location.pathname === '/chat'}
        />
      </div>
    </section>
  );
};

export default Navegacao;
