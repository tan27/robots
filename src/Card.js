import React from 'react'

function Card({name}) {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        <img src="https://robohash.org/test?200x200" alt="logo" />
        <div>
          <h1>{name}</h1>
        </div>
    </div>
  );
}

export default Card;
