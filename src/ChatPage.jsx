import React from 'react';
import Header from './Header';
import Navegacao from './Navegacao';
import Separador from './Separador';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <Header />
      <Separador />
      <Navegacao abaAtiva="chat" />
      <Separador />
      <main className="sec-bg container">
        <div className="secao">
          <div class="secao-texto">
            <h1 class="titulo">
              Em que etapa da sua <br />
              startup você está hoje?
            </h1>
            <p class="subtitulo">
              Pergunte qualquer coisa sobre captação de recursos, estratégia de
              produto, formação de equipe, marketing ou qualquer outro desafio
              da sua startup.
            </p>
          </div>
        </div>
        <div class="pesquisa-box">
          <a href="">
            <img src="/src/img/icon-file.svg" alt="" />
          </a>
          <input
            type="text"
            class="pesquisa-texto"
            placeholder="Digite sua dúvida sobre seu negócio..."
          />
          <a href="">
            <img src="/src/img/icon-send.svg" alt="" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
