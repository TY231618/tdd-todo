import React from 'react';

const Puppy = ({getPuppyPic, image}) => {
  console.log('PUPPY =======> ', image)
  return (
    <div>
      <button 
        className="puppy-fetch"
        onClick={getPuppyPic}
      >Get Puppy</button>
      <div>
        <img src={image} />
      </div>
    </div>
  )
}

export default Puppy;