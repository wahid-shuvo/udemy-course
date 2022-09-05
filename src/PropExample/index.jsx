import React from 'react';

const PropExample = (props) => {
  const { getValueFromChildComponent } = props;
  const handleClick = () => {
    const count = 5;
    getValueFromChildComponent(count+1)
  };
  return (
    <div>
      <button onClick={handleClick}>CLick Me</button>
    </div>
  );
};
export default PropExample;
