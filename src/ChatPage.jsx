import React from 'react';
import Header from './Header';
import Navegacao from './Navegacao';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <Header />
      <Navegacao abaAtiva="chat" />

      <main className="chat-main container">
        <div className="chat-hero">
          <h2>Em que etapa da sua startup você está hoje?</h2>
          <p>
            Pergunte qualquer coisa sobre captação de recursos, estratégia de
            produto, formação de equipe, marketing ou qualquer outro desafio
            da sua startup.
          </p>
        </div>

        <div className="chat-input-wrap">
          <div className="chat-input-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="rgba(255,255,255,0.45)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
            </svg>
            <input
              type="text"
              className="chat-input"
              placeholder="Digite sua dúvida sobre o seu negócio..."
            />
            <button className="chat-send">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </div>
          <p className="chat-disclaimer">
            StartInf IA pode cometer erros. Verifique informações importantes.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;