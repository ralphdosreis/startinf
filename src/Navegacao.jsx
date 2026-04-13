import React from 'react';
import { useLocation } from 'react-router-dom';
import NavButton from './componentes/NavButton';

import iconTopicos from './img/icon-topicos.svg';
import iconChat from './img/icon-chat.svg';
import iconDocumentos from './img/icon-documentos.svg';

const Navegacao = ({ onDocumentosClick, documentosAberto, documentos, addDocument }) => {
  const location = useLocation();
  const isChat = location.pathname === '/chat';

  return (
    <section className="nav-bg">
      <div className="nav container">
        <div className="nav-esquerda">
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
            isActive={isChat}
          />
        </div>

        <div className="nav-direita">
          {isChat && (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <NavButton onClick={onDocumentosClick}
                label="Documentos"
                iconPath={iconDocumentos}
                to=""
                isActive={documentosAberto}
              />
              {documentosAberto && <span className="documentos-contador">{documentos.length}</span>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navegacao;