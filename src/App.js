import React from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import './App.css';

const particlesParams = {
  polygon: {
      
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='fixed-ns top-0 right-0 bottom-0 left-0 z--1'
                params={particlesParams} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
