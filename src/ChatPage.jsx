import React from 'react';
import Header from './Header';
import Navegacao from './Navegacao';
import Separador from './Separador';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import BoxPesquisa from './componentes/BoxPesquisa';
import Aviso from './componentes/Aviso';

const ChatPage = () => {
  return (
    <>
      <Header />
      <Separador />
      <Navegacao abaAtiva="chat" />
      <Separador />
      <main className="sec-bg">
        <div className="secao container">
          <div className="texto-secao">
            <Titulo />
            <Subtitulo texto="Pergunte qualquer coisa sobre captação de recursos, estratégia de produto, formação de equipe, marketing ou qualquer outro desafio da sua startup." />
          </div>
          <div className="container-box">
            <BoxPesquisa />
            <Aviso />
          </div>
        </div>
      </main>
    </>
  );
};

export default ChatPage;
