import React from 'react';
import Titulo from './componentes/Titulo';
import Subtitulo from './componentes/Subtitulo';
import Card from './componentes/Card';

import iconCifrao from './img/icon-cifrão.svg';
import iconIdeia from './img/icon-ideia.svg';
import iconAnalise from './img/icon-analise.svg';
import iconLei from './img/icon-lei.svg';
import iconPitch from './img/icon-pitch.svg';
import iconMarket from './img/icon-market.svg';

const topicos = [
  { id: 1, imagem: iconCifrao,  titulo: 'Captação de Recursos',      texto: 'Descubra editais de fomento e programas de aceleração para sua startup.' },
  { id: 2, imagem: iconIdeia,   titulo: 'Estratégia de Produto',      texto: 'Escolha as funcionalidades certas para validar seu protótipo.' },
  { id: 3, imagem: iconAnalise, titulo: 'Análise de Mercado',         texto: 'Identifique seus diferenciais competitivos frente aos principais players do mercado.' },
  { id: 4, imagem: iconLei,     titulo: 'Marco Legal das Startups',   texto: 'Entenda os incentivos e proteções garantidos pelo Marco Legal das Startups.' },
  { id: 5, imagem: iconPitch,   titulo: 'Pitch Deck e Storytelling',  texto: 'Crie apresentações convincentes para investidores e parceiros estratégicos.' },
  { id: 6, imagem: iconMarket,  titulo: 'Estratégia de Marketing',    texto: 'Planeje o alcance do público, valide canais de venda e estruture o lançamento do seu MVP.' },
];

const SectionTopicos = () => {
  return (
    <main className="sec-bg">
      <div className="secao-topicos container">
        <div className="texto-secao">
          <Titulo texto="Em que etapa da sua startup você está hoje?"/>
          <Subtitulo texto="Escolha um tema ou comece a conversar pelo chat." />
        </div>

        <div className="cards">
          {topicos.map((topico) => (
            <Card
              key={topico.id}
              imagem={topico.imagem}
              titulo={topico.titulo}
              texto={topico.texto}
            />
          ))}
        </div>

      </div>
    </main>
  );
};

export default SectionTopicos;