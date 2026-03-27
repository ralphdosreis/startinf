import React from 'react';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import Card from './componentes/Card';

const SectionTopicos = () => {
  return (
    <>
      <main className="sec-bg">
        <div className="secao container">
          <div className="texto-secao">
            <Titulo />
            <Subtitulo texto="Escolha um tema ou comece a conversar pelo chat." />
          </div>
          <div className="cards">
            <Card
              imagem="./src/img/icon-cifrão.svg"
              titulo="Captação de Recursos"
              texto="Descubra editais de fomento e programas de aceleração para sua startup."
            />
            <Card
              imagem="./src/img/icon-ideia.svg"
              titulo="Estratégia de Produto"
              texto="Escolha as funcionalidades certas para validar seu protótipo."
            />
            <Card
              imagem="./src/img/icon-analise.svg"
              titulo="Análise de Mercado"
              texto="Identifique seus diferenciais competitivos frente aos principais players do mercado."
            />
            <Card
              imagem="./src/img/icon-lei.svg"
              titulo="Marco Legal das Startups"
              texto="Entenda os incentivos e proteções garantidos pelo Marco Legal das Startups."
            />
            <Card
              imagem="./src/img/icon-pitch.svg"
              titulo="Pitch Deck e Storytelling"
              texto="Crie apresentações convincentes para investidores e parceiros estratégicos."
            />
            <Card
              imagem="./src/img/icon-market.svg"
              titulo="Estratégia de Marketing"
              texto="Planeje o alcance do público, valide canais de venda e estruture o lançamento do seu MVP."
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default SectionTopicos;
