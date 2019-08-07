import React from 'react';

import './FaceRecognition.css';

const FaceRecognition = ({ imgUrl }) => {
  return (
    <div className='img mt3 dib'>
      <img className='br4' src={imgUrl} alt="img" width='500px' height='auto'/>
    </div>
  )
}

export default FaceRecognition;
