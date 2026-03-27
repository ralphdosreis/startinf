import React from 'react';

const BoxPesquisa = () => {
  return (
    <>
      <div className="box-pesquisa">
        <a href="" className="icon-file">
          <img src="./src/img/icon-file.svg" alt="Anexar arquivo" />
        </a>
        <input
          type="text"
          className="pesquisa-texto"
          placeholder="Digite sua dúvida sobre o seu negócio..."
        />
        <a href="" className="icon-send">
          <img src="./src/img/icon-send.svg" alt="Enviar mensagem" />
        </a>
      </div>
    </>
  );
};

export default BoxPesquisa;
