import React from 'react';

import Header  from "./Components/Header/Header.jsx"
import Banner from "./Components/Banner/Banner";
import Brands from "./Components/Brands/Brands";
import About from "./Components/About/About";
import Contact from "./Components/Contacts/Contact";

import './AppStyle.scss';

function App() {
  return (
      <>
        <Header />
        <Banner />
        <Brands />
        <About />
        <Contact />
      </>
  );
}

export default App;
