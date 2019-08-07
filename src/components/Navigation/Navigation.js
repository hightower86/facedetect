import React from 'react';

const Navigation = ({ onChangeRoute }) => {
  return (
    <nav className='flex justify-end'>
      <p onClick={() => onChangeRoute('signIn')} 
        className='f3 link dim black underline pa3 pointer'>Sign out</p>
    </nav>
  )
}

export default Navigation;
