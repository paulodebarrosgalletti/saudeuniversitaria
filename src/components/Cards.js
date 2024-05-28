import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../assets/icons.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4  from '../assets/icon4.png';

function Cards() {
  return (
    <React.Fragment>
      <div class="intro">
        <h1>Seus problemas não ditam quem é você, você é quem dita quem são seus problemas.</h1>
        <p>De universitários para universitários </p>
      </div>
      <div class="geral">
        <div class="card">
          <div class="texto-card1">
            <h2>Proximidade</h2>
            <img class="card-image" src={icon1} alt="icon1" />
          </div>
          <div class="geral-card">
            <p>A um clique de você</p>
            <Link to="/Cadastro">
            <button>Saiba Mais</button>
            </Link>
            <ul>
              <li>✓ Disponibilidade 24h</li>
              <li>✓ Onde e como estiver</li>
              <li>✓ Estudantes de Diversas áreas</li>
              <li>✓ Convivência no mesmo meio</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="texto-card2">
            <h2>Perfil</h2>
            <img class="card-image" src={icon2} alt="icon2" />
          </div>
          <div class="geral-card">
            <p>Perfil Compátivel</p>
            <Link to="/Cadastro">
            <button>Saiba Mais</button>
            </Link>
            <ul>
              <li>✓ Do seu jeito</li>
              <li>✓ Junção com disponibilidade</li>
              <li>✓ Junção Coerente</li>
              <li>✓ Direcionamento Adequado</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="texto-card3">
            <h2>Interação</h2>
            <img class="card-image" src={icon3} alt="icon3" />
          </div>
          <div class="geral-card">
            <p>Sinta-se em casa</p>
            <Link to="/Cadastro">
            <button>Saiba Mais</button>
            </Link>
            <ul>
              <li>✓ Tranquilidade e Bem estar</li>
              <li>✓ Ambiente Familiar</li>
              <li>✓ acolhimento estudantil </li>
              <li>✓ Problemas e desafios resolvidos</li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="texto-card4">
            <h2>Disponibilidade</h2>
            <img class="card-image" src={icon4} alt="icon4" />
          </div>
          <div class="geral-card">
            <p>Queremos o seu bem</p>
            <Link to="/Cadastro">
            <button>Saiba Mais</button>
            </Link>
            <ul>
              <li>✓ Alunos online na madrugada</li>
              <li>✓ Sistemas de ajuda a insônia</li>
              <li>✓ Dificuldades de Direcionamento</li>
              <li>✓ Duvidas e respostas</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
