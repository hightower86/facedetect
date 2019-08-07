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
    imgUrl: '',
    box: {}
  };

  onInputChange = (e) => {
    this.setState({inputField: e.target.value});
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }

  onSubmit = () => {
    this.setState({imgUrl: this.state.inputField});
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.inputField)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);// * clarifaiFace.width;
    const height = Number(image.height);// * clarifaiFace.height;
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
  };

  

  render() {

    const { box, imgUrl } = this.state;
  
    return (
      <div className="App">
        <Particles className='particles fixed-ns top-0 right-0 bottom-0 left-0'
                  params={particlesParams} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onSubmit={this.onSubmit}/>
        <FaceRecognition box={box} imgUrl={imgUrl} />
      </div>
    );
  }
}

export default App;
