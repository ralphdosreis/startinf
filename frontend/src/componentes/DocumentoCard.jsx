import React, { useState } from 'react';
import { Download, Trash2, Clock, Sparkles } from 'lucide-react';

const DocumentoCard = ({ document }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date) => {
    // Basic formatting simulating distanceToNow if date-fns not installed
    const diff = Math.floor((new Date() - new Date(date)) / 60000);
    if (diff < 60) return `${diff}m ago`;
    const hours = Math.floor(diff / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <div 
      className="documento-card group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="documento-card-content">
        <div className="documento-icon">{document.icon}</div>
        <div className="documento-info">
          <p className="documento-nome" title={document.name}>{document.name}</p>
          <div className="documento-meta-row">
            <span className="documento-meta flex-center gap-1">
              <Clock size={12} />
              {document.createdAt ? formatDate(document.createdAt) : 'Just now'}
            </span>
            {document.size && (
              <>
                <span className="documento-meta">•</span>
                <span className="documento-meta">{document.size}</span>
              </>
            )}
          </div>
          {document.type === 'generated' && (
            <span className="documento-tag-ai flex-center gap-1">
              <Sparkles size={1} />
              Gerado por IA
            </span>
          )}
        </div>
        <div className="documento-acoes">
          <button className="btn-action">
            <Download size={14} />
          </button>
          <button className="btn-action trash">
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DocumentoCard;