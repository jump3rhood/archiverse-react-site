import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Error from './components/Error';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/Contact' element={ <Contact /> } />
        <Route path='/Gallery' element={ <Gallery /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
