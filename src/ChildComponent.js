import React from 'react';

const ChildComponent = ({ text }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{text}</p>
    </div>
  );
};

export default ChildComponent;
