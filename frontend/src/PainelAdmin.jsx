import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardEstatistica from './componentes/admin/CardEstatistica';
import TabelaAdmin from './componentes/admin/TabelaAdmin';
import Separador from '/src/Separador'

const editaisIniciais = [
  { id: '1', nome: 'PIPE.pdf', categoria: 'FAPESP', tamanho: '245 KB', criado: '03/05/2024' },
  { id: '2', nome: 'Finep.pdf', categoria: 'Finep', tamanho: '511 KB', criado: '12/07/2023' },
  { id: '3', nome: 'Programa Rio.pdf', categoria: 'ABDI', tamanho: '10 MB', criado: '04/02/2023' },
  { id: '4', nome: 'Web Summit.pdf', categoria: 'Sebrae', tamanho: '20 MB', criado: '18/08/2022' },
];

const documentosContextoIniciais = [
  { id: '1', nome: 'Plano de negocio.pdf', categoria: 'Negócios', tamanho: '245 KB', criado: '03/05/2024' },
  { id: '2', nome: 'Plano de financiamento.pdf', categoria: 'Financeiro', tamanho: '511 KB', criado: '12/07/2023' },
  { id: '3', nome: 'Legislacao.pdf', categoria: 'Legislação', tamanho: '10 MB', criado: '04/02/2023' },
  { id: '4', nome: 'Sebrae.pdf', categoria: 'Orientações', tamanho: '20 MB', criado: '18/08/2022' },
  { id: '5', nome: 'Marketing.pdf', categoria: 'Marketing', tamanho: '422 KB', criado: '12/01/2022' },
];

const PainelAdmin = () => {
  const navigate = useNavigate();
  const [abaAtiva, setAbaAtiva] = useState('documentos');
  const [editais, setEditais] = useState(editaisIniciais);
  const [documentosContexto, setDocumentosContexto] = useState(documentosContextoIniciais);

  const totalDocumentos = editais.length + documentosContexto.length;

  const handleDeletarEdital = (id) => {
    setEditais((prev) => prev.filter((item) => item.id !== id));
  };

  const handleDeletarDocumento = (id) => {
    setDocumentosContexto((prev) => prev.filter((item) => item.id !== id));
  };

  const formatarTamanho = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleAdicionarItem = (file, setter) => {
    const novoItem = {
      id: Math.random().toString(36).substr(2, 9),
      nome: file.name,
      categoria: 'Upload', // Categoria padrão ou detectada
      tamanho: formatarTamanho(file.size),
      criado: new Date().toLocaleDateString('pt-BR'),
      arquivoOriginal: file // Guardando o arquivo para uso futuro pela IA
    };
    setter((prev) => [novoItem, ...prev]);
  };

  return (
    <div className="painel-admin-bg">
      <div className="painel-admin-container container">
        <div className="painel-admin-header">
          <button className="painel-admin-voltar" onClick={() => navigate('/chat')}>
            <img src="/src/img/icon-seta.svg" width="20" height="16" alt="Voltar" />
          </button>
          <div className="painel-admin-titulo">
            <img src="/src/img/Vector.svg" width="36" height="36" alt="Admin" className="icon-laranja" />
            <h1>Painel de Administração</h1>
          </div>
        </div>
        <Separador />
        <div className="painel-admin-stats">
          <CardEstatistica
            icone={<img src="/src/img/icon-documentos.svg" width="24" height="24" alt="Documentos" className="icon-azul" />}
            valor={totalDocumentos}
            label="Total de documentos"
            corIcone="azul"
          />
          <CardEstatistica
            icone={<img src="/src/img/icon-editais.svg" width="24" height="24" alt="Editais" className="icon-verde" />}
            valor={editais.length}
            label="Total de editais"
            corIcone="verde"
          />
          <CardEstatistica
            icone={<img src="/src/img/icon-dos-contex.svg" width="24" height="24" alt="Contexto" className="icon-amarelo" />}
            valor={documentosContexto.length}
            label="Documentos de contexto"
            corIcone="amarelo"
          />
        </div>
        <Separador />
        <div className="painel-admin-abas">
          <button
            className={`painel-aba-btn ${abaAtiva === 'documentos' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('documentos')}
          >
            <img
              src="/src/img/icon-dos-contex.svg"
              width="16" height="16"
              alt="Documentos de contexto"
              className={abaAtiva === 'documentos' ? 'icon-laranja' : 'icon-branco'}
            />
            Documentos de contexto
          </button>
          <button
            className={`painel-aba-btn ${abaAtiva === 'editais' ? 'active' : ''}`}
            onClick={() => setAbaAtiva('editais')}
          >
            <img
              src="/src/img/icon-editais.svg"
              width="16" height="16"
              alt="Editais"
              className={abaAtiva === 'editais' ? 'icon-laranja' : 'icon-branco'}
            />
            Editais
          </button>
        </div>
   
        <div className="painel-admin-conteudo">
          {abaAtiva === 'editais' ? (
            <TabelaAdmin
              itens={editais}
              onDeletar={handleDeletarEdital}
              labelBotao="Add Edital"
              onAdd={(file) => handleAdicionarItem(file, setEditais)}
            />
          ) : (
            <TabelaAdmin
              itens={documentosContexto}
              onDeletar={handleDeletarDocumento}
              labelBotao="Add Documento"
              onAdd={(file) => handleAdicionarItem(file, setDocumentosContexto)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PainelAdmin;
