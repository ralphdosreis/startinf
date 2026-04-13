import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navegacao from './Navegacao';
import Separador from './Separador';

const documentosIniciais = [
  { id: '1', name: 'Plano de negocios.pdf', type: 'generated', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), size: '248 KB', icon: '📕' },
  { id: '2', name: 'Pitch.pdf', type: 'generated', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), size: '248 KB', icon: '📕' },
  { id: '3', name: 'Marketing.pdf', type: 'generated', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 48), size: '248 KB', icon: '📕' },
  { id: '4', name: 'Perguntas.pdf', type: 'generated', createdAt: new Date(Date.now() - 1000 * 60 * 60 * 72), size: '248 KB', icon: '📕' },
];

const Layout = () => {
  const [mostrarDocumentos, setMostrarDocumentos] = useState(false);
  const [documentos, setDocumentos] = useState(documentosIniciais);

  const addDocument = (newDoc) => {
    setDocumentos((prev) => [{...newDoc, id: String(Date.now()), createdAt: new Date()}, ...prev]);
  };

  return (
    <>
      <Header />
      <Separador />
      <Navegacao
        onDocumentosClick={() => setMostrarDocumentos(!mostrarDocumentos)}
        documentosAberto={mostrarDocumentos}
        documentos={documentos}
        addDocument={addDocument}
      />
      <Separador />
      <Outlet context={{ mostrarDocumentos, documentos, addDocument }} />
    </>
  );
};

export default Layout;