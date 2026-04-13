import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import BoxPesquisa from './componentes/BoxPesquisa';
import Aviso from './componentes/Aviso';
import SideBar from './componentes/SideBar';
import DocumentosSidebar from './componentes/DocumentosSidebar';

const ChatPage = () => {
  const { mostrarDocumentos, documentos, addDocument } = useOutletContext();

  return (
    <main className="sec-bg">
      <SideBar />
      <div className="secao-page container">
        <div className="texto-secao">
          <Titulo texto="Em que etapa da sua startup você está hoje?" />
          <Subtitulo texto="Pergunte qualquer coisa sobre captação de recursos, estratégia de produto, formação de equipe, marketing ou qualquer outro desafio da sua startup." />
        </div>
        <div className="container-box">
          <BoxPesquisa />
          <Aviso />
        </div>
      </div>
      <DocumentosSidebar isOpen={mostrarDocumentos} documentos={documentos} addDocument={addDocument} />
    </main>
  );
};

export default ChatPage;