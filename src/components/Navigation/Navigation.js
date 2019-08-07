import React from 'react';

const Navigation = ({ onChangeRoute, isSignedIn }) => {
  
  if (isSignedIn) {
    return (
      <nav className='flex justify-end'>
        <p onClick={() => onChangeRoute('signOut')} 
          className='f3 link dim black underline pa3 pointer'>Sign out</p>
      </nav>
    )
  } else {
    return (
      <nav className='flex justify-end'>
        <p onClick={() => onChangeRoute('signIn')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
        <p onClick={() => onChangeRoute('Register')}   className='f3 link dim black underline pa3 pointer'>Register</p>
      </nav>
    )
  }
}

export default Navigation;
