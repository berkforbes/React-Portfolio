import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  return (
    <div>
      <Nav
      ></Nav>
<main>
  <ContactForm></ContactForm>
  <Gallery></Gallery>
  <About></About>
</main>
    </div>
  );
}

export default App;


