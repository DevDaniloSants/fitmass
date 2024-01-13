// styles
import '../styles/components/programas.sass';

//images
import crossfit from '../assets/crossfit.png';
import fitness from '../assets/fitness.png';
import yoga from '../assets/yoga.png';
import boxe from '../assets/boxe.png';

const Programas = () => {
  return (
    <div className="programs">
      <div className="title">
        <h1>Outros Programas</h1>
      </div>
      <div className="programsDetails">
        <div>
          <img src={crossfit} alt="Crossfit" />
          <h1>CrossFit</h1>
          <button>Detalhes</button>
        </div>
        <div>
          <img src={fitness} alt="fitness" />
          <h1>Fitness</h1>
          <button>Detalhes</button>
        </div>
        <div>
          <img src={yoga} alt="yoga" />
          <h1>Yoga</h1>
          <button>Detalhes</button>
        </div>
        <div>
          <img src={boxe} alt="boxe" />
          <h1>Boxe</h1>
          <button>Detalhes</button>
        </div>
      </div>
    </div>
  );
};

export default Programas;
