import React, {useState, useEffect} from 'react';
import './Header.css'
// import PropTypes from 'prop-types';

function Header() {
  const [name, setName] = useState("");
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert(`Hello, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Form</h2>
      <input
        type="text"
        placeholder='Enter Your Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
       />
       <br></br>
       <button type='submit'>Submit</button>

    </form>
  );
}

export default Header;
