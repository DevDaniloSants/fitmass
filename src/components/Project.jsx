// Styles
import '../styles/components/project.sass';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// hooks
import { useRef, useLayoutEffect } from 'react';

// svg
import check from '../assets/check.svg';

const Project = () => {
  const elements = useRef();
  const timeLine = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.context(() => {
      timeLine.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.cards',
            scrub: true,
            start: 'top 730px',
            end: 'bottom 900px',
          },
        })
        .fromTo('#card1', { opacity: 0, y: -100 }, { opacity: 1, y: 0 })
        .fromTo('#card2', { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, '-=0.5');
    }, elements);
  }, []);

  return (
    <div className="projects" ref={elements}>
      <div className="title">
        <h1>Escolha o seu plano</h1>
      </div>
      <div className="cards">
        <div className="cardModel" id="card1">
          <h2 className="prime">Plano Prime</h2>
          <div className="price">
            <span>R$ 119,90</span>
          </div>
          <div className="descriptions">
            <ul>
              <li>
                <img src={check} alt="check" />
                Acesso em todas as unidades
              </li>
              <li>
                <img src={check} alt="check" />
                Consulta com nutricionista
              </li>
              <li>
                <img src={check} alt="check" />
                Orientação individual
              </li>
              <li>
                <img src={check} alt="check" />
                Acesso a todos os programas
              </li>
            </ul>
            <button>Começar Agora</button>
          </div>
        </div>
        <div className="cardModel" id="card2">
          <h2 className="yearly">Plano Anual</h2>
          <div className="price">
            <span>R$ 999,00</span>
          </div>
          <div className="descriptions">
            <ul>
              <li className="rejected">Acesso em todas as unidades</li>
              <li>
                <img src={check} alt="check" />
                Consulta com nutricionista
              </li>
              <li>
                <img src={check} alt="check" />
                Orientação individual
              </li>
              <li>
                <img src={check} alt="check" />
                Acesso a todos os programas
              </li>
            </ul>
            <button>Começar Agora</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
