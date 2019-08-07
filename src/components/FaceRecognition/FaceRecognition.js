import React from 'react';

import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl, box }) => {
  const bbStyle = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol
  };

  return (
    <div className='img mt3 dib dfcenter'>
      <div className='absolute'>
        <img className='br2' id='inputImage' src={imgUrl} alt="img" width='500px' height='auto'/>
        <div className="bounding-box" style={bbStyle}></div>
      </div>
      
    </div>
  )
}

export default FaceRecognition;
