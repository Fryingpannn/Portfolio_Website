import React from 'react';

const Peepo = (props) => {

  const getPeepoCount = () => {
    return localStorage.getItem('peepoCount') || 0;
  }

  const updatePeepoCount = () => {
    localStorage.setItem('peepoCount', parseInt(getPeepoCount()) + 1);
    updateCount(getPeepoCount());
  }

  const [count, updateCount] = React.useState(getPeepoCount());

  return (
    <div style={props.style}>
      <span style={{fontSize: "1.2rem"}}>You clicked {count} times</span> <br/>
      <button onClick={() => updatePeepoCount()}> Easter Egg </button>
    </div>
  );

}

export default Peepo;
