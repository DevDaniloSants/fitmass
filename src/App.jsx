//styles
import './styles/app.sass';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Programas from './components/Programas';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Banner />
        <Programas />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
