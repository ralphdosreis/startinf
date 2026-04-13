import React, { useState } from 'react';

const BoxPesquisa = () => {
  const [mensagem, setMensagem] = useState('');

  function handleEnviar(e) {
    e.preventDefault();
    if (!mensagem.trim()) return; // não envia mensagem vazia
    console.log('Mensagem enviada:', mensagem);
    setMensagem(''); // limpa o input após enviar
  }

  return (
    <form className="box-pesquisa" onSubmit={handleEnviar}>
      <button type="button" className="icon-file">
        <img src="/src/img/icon-file.svg" alt="Anexar arquivo" />
      </button>
      <input
        type="text"
        className="pesquisa-texto"
        placeholder="Digite sua dúvida sobre o seu negócio..."
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button type="submit" className="icon-send">
        <img src="/src/img/icon-send.svg" alt="Enviar mensagem" />
      </button>
    </form>
  );
};

export default BoxPesquisa;