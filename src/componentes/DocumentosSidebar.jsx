import React, { useState, useRef } from 'react';
import DocumentoCard from './DocumentoCard';
import { Upload, FileText, Sparkles } from 'lucide-react';

const DocumentosSidebar = ({ isOpen, documentos, addDocument }) => {
  const [activeTab, setActiveTab] = useState('all');
  const fileInputRef = useRef(null);

  const generatedDocs = documentos.filter((doc) => doc.type === 'generated');
  const uploadedDocs = documentos.filter((doc) => doc.type === 'uploaded');

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files) {
      for (const file of files) {
        const extension = file.name.split('.').pop()?.toLowerCase();
        let icon = '📄';
        if (extension === 'pdf') icon = '📕';
        else if (['doc', 'docx'].includes(extension || '')) icon = '📝';
        else if (['xls', 'xlsx'].includes(extension || '')) icon = '📈';
        else if (['ppt', 'pptx'].includes(extension || '')) icon = '📊';
        else if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || '')) icon = '🖼️';

        addDocument({
          name: file.name,
          type: 'uploaded',
          size: formatFileSize(file.size),
          icon,
        });
      }
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const displayDocs =
    activeTab === 'all'
      ? documentos
      : activeTab === 'generated'
        ? generatedDocs
        : uploadedDocs;

  return (
    <div className={`documentos-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="documentos-botoes">
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden-file-input"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.md,.jpg,.jpeg,.png,.gif"
          style={{ display: 'none' }}
        />
        <button onClick={handleUpload} className="btn-upload">
          <Upload size={18} /> Enviar Arquivos
        </button>
      </div>

      <div className="tabs-list">
        <button 
          className={`tab-trigger ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          Todos
        </button>
        <button 
          className={`tab-trigger ${activeTab === 'generated' ? 'active' : ''}`}
          onClick={() => setActiveTab('generated')}
        >
          <Sparkles size={14} /> IA
        </button>
        <button 
          className={`tab-trigger ${activeTab === 'uploaded' ? 'active' : ''}`}
          onClick={() => setActiveTab('uploaded')}
        >
          <Upload size={14} /> Enviados
        </button>
      </div>

      <div className="documentos-lista scroll-area">
        {displayDocs.length === 0 ? (
          <div className="empty-docs">
            <FileText size={40} className="empty-icon" />
            <p>Nenhum documento ainda</p>
            <span>
              {activeTab === 'generated'
                ? 'Os documentos gerados pela IA aparecerão aqui' 
                : activeTab === 'uploaded'
                  ? 'Envie documentos para começar'
                  : 'Comece a conversar ou envie documentos'}
            </span>
          </div>
        ) : (
          displayDocs.map((doc) => (
            <DocumentoCard key={doc.id} document={doc} />
          ))
        )}
      </div>
    </div>
  );
};

export default DocumentosSidebar;