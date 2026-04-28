import React from 'react';

const CardEstatistica = ({ icone, valor, label, corIcone }) => {
  return (
    <div className="card-estatistica">
      <div className={`card-estatistica-icone ${corIcone}`}>
        {icone}
      </div>
      <div className="card-estatistica-info">
        <span className="card-estatistica-valor">{valor}</span>
        <span className="card-estatistica-label">{label}</span>
      </div>
    </div>
  );
};

export default CardEstatistica;
