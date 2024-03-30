//styles
import './styles/app.sass';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Programas from './components/Programas';
import Project from './components/Project';

import banner from './assets/banner.svg';
import { useEffect, useState } from 'react';

const App = () => {
  const [loadingImage, setLoadingImage] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setLoadingImage(true);
    };
    image.src = banner;
  }, []);

  if (!loadingImage) {
    return (
      <div className="loader_container">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Banner banner={banner} />
        <Programas />
        <Project />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
