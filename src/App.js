import React from 'react';

import './App.css';
import Hero from './componets/Hero';
import Popular from './componets/Popular';
import Banner from './componets/Banner';
import Footer from './componets/Footer'
import Header from './componets/Header';

function App() {
  return (
    <div >
  <Header/>
     <Hero/>
     <Popular/>
     <Banner/>
     <Popular/>
     <Footer/>
    </div>
  );
}

export default App;
