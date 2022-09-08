import React, { useContext } from 'react';
import { Context } from '../App';
//usestate
//useffect
//usecontext
//usereducer
//useref


function FunctionalBasedComponent() {

  const getValueFromContext=useContext(Context)
  console.log(getValueFromContext);
  return (
    <div>
      <button style={{ backgroundColor: getValueFromContext }}>Click</button>
    </div>
  );


}

export default FunctionalBasedComponent;

