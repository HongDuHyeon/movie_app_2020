import React from 'react';
import propTypes from 'prop-types';

function Food({name, picture,rate}) {
  
  return (
    <div>
      <h2>i like {name}</h2>
      <span>평점 : {rate} / 5.0</span>
      <img src={picture} alt={name} />
    </div>
  );
}
const foodLike = [
  {
    id:1,
    name: 'soju1',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.mCwexplUrwjectbne65Y0QHaHa%26pid%3DApi%26h%3D160&f=1',
    rating: 4.3,
  },
  {
    id:2,
    name: 'soju2',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XYZFxmRo6It6KgdAu2w91wHaHa%26pid%3DApi%26h%3D160&f=1',
    rating: 4.8,
  },
  {
    id:3,
    name: 'soju3',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Zj8GCJg2E9I-Horuc6EQmQHaFj%26pid%3DApi%26h%3D160&f=1',
    rating: 4.9,
  },
]
 
// function rederFood (dish) {
//   return <Food name={dish.name} picture={dish.image}/>
// }

// 화살표 함수 방식
const renderFood = dish => <Food key={dish.id} name={dish.name} picture={dish.image} rate={dish.rating}/>


function App() {
  
  return (
    <div>
      {foodLike.map(renderFood)}
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rate: propTypes.number.isRequired
}

// export default App;
