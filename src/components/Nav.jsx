// styles
import '../styles/components/nav.sass';

const Nav = ({ open, toggleMenu }) => {
  console.log(open + ' valor');
  return (
    <nav className={open ? 'nav open' : 'nav'}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#programas">Programas</a>
        </li>
        <li>
          <a href="#professores">Professores</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
      </ul>
      {open && (
        <button className="close" onClick={toggleMenu}>
          X
        </button>
      )}
    </nav>
  );
};

export default Nav;
