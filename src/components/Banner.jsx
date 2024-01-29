// styles
import '../styles/components/banner.sass';

import { gsap } from 'gsap';

// hooks
import { useLayoutEffect, useRef } from 'react';

const Banner = () => {
  const welcomeRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const btnRef = useRef();

  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    const welcomeTitle = welcomeRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const btn = btnRef.current;

    tl.fromTo(
      welcomeTitle,
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
      .fromTo(
        title,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
        },
        '-=0.5',
      )
      .fromTo(
        description,
        {
          opacity: 0,
          x: -700,
        },
        {
          opacity: 1,
          x: 0,
        },
        '-=0.5'
      )
      .fromTo(
        btn,
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
        },
        '-=0.5'
      );
  }, []);

  return (
    <div className="banner" id="home">
      <div>
        <span className="welcome" ref={welcomeRef}>
          welcome to
        </span>
        <h1 ref={titleRef}>
          <span>fit</span>mass
        </h1>
        <div ref={descriptionRef}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            aliquid nihil voluptas repellendus illo velit aliquam! Ea ipsam
            dicta vero cum quo debitis voluptatem enim assumenda officiis
            architecto! Nesciunt, cupiditate.
          </p>
        </div>
        <button ref={btnRef}>Start</button>
      </div>
    </div>
  );
};

export default Banner;
