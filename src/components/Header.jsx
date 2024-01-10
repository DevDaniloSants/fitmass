// Styles
import '../styles/components/header.sass';

// hooks

// icons
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';

// components
import Nav from './Nav';
import { useMenu } from '../hooks/useMenu';

const Header = () => {
  const { open, toggleMenu } = useMenu();

  return (
    <header>
      <div className="informations">
        <div>
          <span>
            <FaPhone />
            21 99999-9999
          </span>
          <span>
            <IoLocationSharp />
            Rua loren 787, RJ
          </span>
        </div>
        <form className="search">
          <FaSearch />
          <input type="text" placeholder="Pesquisar..." />
        </form>
      </div>
      <div className="navigation">
        <div className="titleAndManuMobile">
          <button onClick={toggleMenu} className="menuHamburguer">
            <FaBars />
          </button>
          <h4>FITMASS</h4>
        </div>
        <Nav open={open} toggleMenu={toggleMenu}></Nav>
        <div className="socials">
          <a href="#">
            <BsTwitterX />
          </a>
          <a href="#">
            {' '}
            <FaInstagram />
          </a>
          <a href="#">
            {' '}
            <ImFacebook2 />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
