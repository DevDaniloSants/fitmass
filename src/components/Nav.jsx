// styles
import '../styles/components/nav.sass';

import PropTypes from 'prop-types';

const Nav = ({ open, toggleMenu }) => {
  console.log(open + ' valor');
  return (
    <nav className={open ? 'nav open' : 'nav'}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Programas</a>
        </li>
        <li>
          <a href="#">Professores</a>
        </li>
        <li>
          <a href="#">Contato</a>
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

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default Nav;
