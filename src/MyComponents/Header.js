import React, {useState, useEffect} from 'react';
import './Header.css'
// import PropTypes from 'prop-types';

function Header(props) {
  const [count, setCount] = useState(0);
  useEffect(()=> {
    document.title = `You Clickes ${count} times`;
  }, [count]);

  const increment = () => setCount(count+1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count-1);
  return (
    <div className='counter-card'>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset} style={{marginLeft: '10px'}}>Reset</button>
      <button onClick={decrement} disabled={count===0} style={{marginLeft: '10px'}}>Decrement</button>
    </div>
  )
}

export default Header;
