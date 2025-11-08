import React, {useState} from 'react';
// import PropTypes from 'prop-types';

function Header(props) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count+1);
  const reset = () => setCount(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Header;
