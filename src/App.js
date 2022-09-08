import logo from './logo.svg';
import './App.css';
// import ClassBasedComponents from './components/ClassBasedComponent';
import FunctionalBasedComponent from './components/FunctionalBasedComponent';
import { createContext } from 'react';

export const Context = createContext('light');
console.log(Context);

function App() {
  return (
    <Context.Provider value={"pink"}>
      <div className="App">
        <FunctionalBasedComponent />
      </div>
    </Context.Provider>
  );
}

export default App;
