//usestate
//useffect
//usecontext
//usereducer
//useref

import React, { useReducer, useRef } from 'react';

function FunctionalBasedComponent() {

  const inputRef=useRef(null)
  console.log(inputRef)

  const handleFocus=()=>{
    inputRef.current.focus()
  }
  return (
    <div>
        <input ref={inputRef} name={"name"} placeholder={"Name"} type={"text"}/>
      <button onClick={handleFocus}>Click</button>
    </div>
  );

}

export default FunctionalBasedComponent;

