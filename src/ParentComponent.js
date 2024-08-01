import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const textToPass = 'Hello from ParentComponent!';
  
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent text={textToPass} />
    </div>
  );
};

export default ParentComponent;
