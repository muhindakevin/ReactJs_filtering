// Button.js
import React from 'react';
import './Button.css';

const Button = ({ text, color, onClick }) => {
  return (
    <button className="acta-button" style={{ backgroundColor: color }} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
