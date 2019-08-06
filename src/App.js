import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import './App.css';

const app = new Clarifai.App({
  apiKey: '45307d5a668549edbd9bb90f4453870f'
 });

const particlesParams = {
  polygon: {
      
  }
};

class App extends Component {
  state = {
    inputField: ''
  };

  onInputChange = (e) => {
    console.log(e.target.value)
  }

  onSubmit = () => {
    console.log('the button clicked');

    app.models
    .predict(
    Clarifai.COLOR_MODEL,
        // URL
        "https://samples.clarifai.com/metro-north.jpg"
    )
    .then((response) => {
        console.log(response);
        },
        (err) => console.log(err)
    );
  }

  render() {
  
    return (
      <div className="App">
        <Particles className='fixed-ns top-0 right-0 bottom-0 left-0 z--1'
                  params={particlesParams} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
