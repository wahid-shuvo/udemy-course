import React, { useEffect, useState } from 'react';
//usestate
//useffect
//usecontext
//usereducer
//useref


function FunctionalBasedComponent() {

  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Effect is called once');
  }, []); //Work Like componentDidMount in the class based component.That is this function is called on page load

  useEffect(() => {
    if (count === 5) {
      setFlag(true);
    }
  }, [count]); // componentDidUpdate

  useEffect(()=>{
    return ()=>{
      console.log('unmounted')
    }
  }) // Component Will unmount

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      Counter Value is {count}
      {
        flag && <p>Hello</p>
      }
    </div>);

}

export default FunctionalBasedComponent;

