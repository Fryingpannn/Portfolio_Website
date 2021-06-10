import React, {useState} from 'react';
import Header from './header';
import data from './yourdata';


const Peepo = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p style={{fontSize: "50px"}}>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );

}

export default Peepo;