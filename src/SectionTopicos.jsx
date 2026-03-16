import React from 'react';

const SectionTopicos = () => {
  return (
    <>
      <section class="sec-bg">
        <div class="sec-topicos container">
          <div>
            <h1 class="titulo">
              Em que etapa da sua <br />
              startup você está hoje?
            </h1>
            <p class="subtitulo">
              Escolha um tema ou comece a conversar pelo chat.
            </p>
          </div>
          <div class="cards">
            <div class="card">
              <img src="/src/img/icon-cifrão.svg" alt="" />
              <h2>Captação de Recursos</h2>
              <p>
                Descubra editais de fomento e programas <br />
                de aceleração para sua Startup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionTopicos;
