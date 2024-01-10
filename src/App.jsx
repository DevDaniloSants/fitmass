//styles
import './styles/app.sass';

// components
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <div className="container"></div>
      <Footer></Footer>
    </div>
  );
};

export default App;
