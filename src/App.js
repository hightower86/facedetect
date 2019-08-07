import React, { Component } from 'react';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Rank from './components/Rank';
import ImageLinkForm from './components/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition';
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
    inputField: '',
    imgUrl: ''
  };

  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  onSubmit = () => {
    this.setState({imgUrl: this.state.input});

    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.imgUrl
    )
    .then((response) => {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
