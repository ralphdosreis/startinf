import React from 'react';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import BoxPesquisa from './componentes/BoxPesquisa';
import Aviso from './componentes/Aviso';

const ChatPage = () => {
  return (
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
  );
};

export default ChatPage;
