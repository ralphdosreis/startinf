import React from 'react';

const BoxPesquisa = () => {
  return (
    <form className="box-pesquisa" onSubmit={(e) => e.preventDefault()}>
      <button type="button" className="icon-file">
        <img src="/src/img/icon-file.svg" alt="Anexar arquivo" />
      </button>
      <input
        type="text"
        className="pesquisa-texto"
        placeholder="Digite sua dúvida sobre o seu negócio..."
      />
      <button type="submit" className="icon-send">
        <img src="/src/img/icon-send.svg" alt="Enviar mensagem" />
      </button>
    </form>
  );
};

export default BoxPesquisa;
