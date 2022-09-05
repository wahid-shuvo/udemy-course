import logo from './logo.svg';
import './App.css';
import ClassBasedComponents from './components/ClassBasedComponent';
import FunctionalBasedComponent from './components/FunctionalBasedComponent';

function App() {
  return (
    <div className="App">
     < ClassBasedComponents/>
      <FunctionalBasedComponent/>
    </div>
  );
}

export default App;
