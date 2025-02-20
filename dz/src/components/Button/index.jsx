import React from 'react';
import './Button.css'; // Если нужно, создайте Button.css

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
