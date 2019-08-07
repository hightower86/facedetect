import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f2" >
        This magic brain will detect faces in your picture.
      </p>

      <div className="form center pa4 br3 shadow-5">
        <div className="ph2 flex items-stretch">
          <input type="text" 
            className="f4 pa2 pv2 w-70"
            onChange={onInputChange}
            />
          <button className="pointer w-30 grow f4 link ph3 pv2 ml2 dib white bg-light-purple"
                  onClick={onSubmit}>Detect!</button>
        </div>
      </div>
      
      
    </div>
  )
}

export default ImageLinkForm;