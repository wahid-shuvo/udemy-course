//usestate
//useffect
//usecontext
//usereducer
//useref

import React,{ useReducer } from 'react';

const intialState = {
  flag: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_BUTTON':
      return (
        {
          ...state,
          flag:!state.flag
        }

      )
    default:
      return state;

  }
};

function FunctionalBasedComponent() {

  const [state, dispatch] = useReducer(reducer, intialState);
  console.log(state)
  return (
    <div>
      <button onClick={() => dispatch({ type: 'TOGGLE_BUTTON' })}>Toggle</button>
    </div>
  );

}

export default FunctionalBasedComponent;

