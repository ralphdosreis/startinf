import React from 'react';
import Header from './Header';
import Navegacao from './Navegacao';
import iconInput from './img/icon-input.svg';

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
            <img src={iconInput} alt="" width="20" height="20" />
            <input
              type="text"
              className="chat-input"
              placeholder="Digite sua dúvida sobre o seu negócio..."
            />
            <button className="chat-send botao">
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