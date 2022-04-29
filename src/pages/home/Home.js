import React from 'react';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import IconCrousel from '../../component/IconCrousel/IconCrousel';
import MiddleComponent from '../../component/MiddleComponent/MiddleComponent';
import Searchbar from '../../component/searchBar/Searchbar';
import Crousel from '../../component/Crousel/Crousel';
function Home() {
  return (
    <div style={{ marginTop: '2px' }}>
      <Header />
      <Crousel />
      <IconCrousel />
      <Searchbar />
      <MiddleComponent />
      <Footer />
    </div>
  );
}

export default Home;
