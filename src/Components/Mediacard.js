import React from 'react';

function Mediacard(props) {
  return (
    <div className='background'>
      <div className='background__principal'>
        <img className='background__principal--image' src='https://definicion.mx/wp-content/uploads/2014/04/persona.jpg'></img>
        <div className='background__principal--secondary'>
          <h1>{props.name}</h1>
          <small>{props.date}</small>
        </div>
      </div>
      <p className='background__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div className='background__last'>
        <small className='background__last--read-more'>Leer más...</small>
        <i className={props.className}></i>
      </div>
    </div>
  );
}

export default Mediacard;
