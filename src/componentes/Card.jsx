import React from 'react';

const Card = ({ imagem, titulo, texto }) => {
  return (
    <>
      <div className="container-card">
        <img src={imagem} alt={titulo} />
        <h2 className="titulo-card">{titulo}</h2>
        <p className="texto-card">{texto}</p>
      </div>
    </>
  );
};

export default Card;
