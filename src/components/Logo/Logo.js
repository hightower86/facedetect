import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain-icon-png-2524.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br3 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3">
          <img className='' src={brain} alt="logo"/>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo
