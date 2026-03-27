import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import { MessageSquare } from 'lucide-react';

const Navegacao = () => {
  const location = useLocation();
  const isChat = location.pathname === '/chat';

  return (
    <section className="nav-bg">
      <div className="nav container">
        <Link className={isChat ? 'botao-des topicos' : 'botao topicos'} to="/">
          Explorar Tópicos
        </Link>
        <Link className={isChat ? 'botao chat' : 'botao-des chat'} to="/chat">
          <MessageSquare />
          Chat
        </Link>
      </div>
    </section>
  );
};

export default Navegacao;