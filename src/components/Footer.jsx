import '../styles/components/footer.sass';

const Footer = () => {
  return (
    <footer>
      <div className="top_footer">
        <span>FITMASS.</span>
        <div className="links">
          <ul>
            <li>
              <a href="#">Treinos</a>
            </li>
            <li>
              <a href="#">Sobre nós</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Horários de treino</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Política de Privacidade</a>
            </li>
            <li>
              <a href="#">SAC</a>
            </li>
            <li>
              <a href="#">Conheça nossas Academias</a>
            </li>
            <li>
              <a href="#">Comece agora</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="end_footer">
        <p>&copy; FITMASS Todos os Direitos Reservados. </p>
      </div>
    </footer>
  );
};

export default Footer;
