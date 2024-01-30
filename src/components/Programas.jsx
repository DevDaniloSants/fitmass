// styles
import '../styles/components/programas.sass';

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// hooks
import { useState, useRef, useEffect, useLayoutEffect } from 'react';

//images
import crossfit from '../assets/crossfit.svg';
import fitness from '../assets/fitness.svg';
import yoga from '../assets/yoga.svg';
import boxe from '../assets/boxe.svg';

const programs = [
  { id: 1, image: crossfit, name: 'Crossfit' },
  { id: 2, image: fitness, name: 'Fitness' },
  { id: 3, image: yoga, name: 'Yoga' },
  { id: 4, image: boxe, name: 'Boxe' },
];
const Programas = () => {
  const carousel = useRef();
  const elements = useRef();
  const timeLine = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };

    window.addEventListener('resize', updateWidth);

    // Inital value
    updateWidth();

    // Remove listener
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.context(() => {
      timeLine.current = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.inner',
            scrub: true,
            start: 'top 730px',
            end: 'bottom 825px',
          },
        })
        .fromTo('#image1', { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
        .fromTo('#image2', { opacity: 0, y: 160 }, { opacity: 1, y: 0 })
        .fromTo('#image3', { opacity: 0, y: -160 }, { opacity: 1, y: 0 })
        .fromTo('#image4', { opacity: 0, y: -160 }, { opacity: 1, y: 0 });
    }, elements);

    return () => {
      gsap.killTweensOf('.item');
    };
  }, []);

  return (
    <div className="programs" ref={elements}>
      <div className="title">
        <h1>Programas e treinos</h1>
      </div>
      <div className="carousel_container">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: 'grabbing' }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {programs.map((program) => (
              <motion.div
                key={program.id}
                className="item"
                id={`image${program.id}`}
              >
                <img src={program.image} alt="teste" />
                <span>{program.name}</span>
                <button>Detalhes</button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Programas;
