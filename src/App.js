import React from 'react';
import PropTypes from 'prop-types';
//
const foodILike = [
  {
    id: 1,
    name: '김치',
    image:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgdimg.gmarket.co.kr%2F911872451%2Fstill%2F600%3Fver%3D1509588369&f=1&nofb=1',
    rating: 5,
  },
  {
    id: 2,
    name: '삼겹살',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi%26h%3D160&f=1',
    rating: 3.5,
  },
  {
    id: 3,
    name: '감자전',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_RHvq4OhfpzkVXnILfrQHaEf%26pid%3DApi%26h%3D160&f=1',
    rating: 5.5,
  },
  {
    id: 4,
    name: '한우',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Ecec8cp64FDhy5rw4TxI_AHaHn%26pid%3DApi%26h%3D160&f=1',
    rating: 4.5,
  },
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = function (dish) {
//   return <Food name={dish.name} picture={dish.image} />;
// };

// const renderFood = (dish) => (
//   <Food key={dish.id} name={dish.name} image={dish.image} />
// );

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
