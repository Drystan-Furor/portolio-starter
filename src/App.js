import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Services />
        <div className='h-[400px]'></div>
      <Work />
      <Contact />
        <div className='h-[800px]'></div>
      <Testimonials />
        <div className='h-[1000px]'></div>
      <Footer />
        <div className='h-[200px]'></div>
    </div>
  );
};

export default App;
