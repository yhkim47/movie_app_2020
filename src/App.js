import React from 'react';

function Hello() {
  return <h3>Hello</h3>;
}

function Food({ fav }) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <Hello />
      <Food fav="kimchi" />
      <Food fav="라면" />
      <Food fav="볶음밥" />
      <Food fav="소고기" />
    </div>
  );
}

export default App;
