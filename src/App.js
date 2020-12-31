import LinguistsJson from './components/LinguistsJson';
import IOLmedalsJson from './components/IOLmedalsJson';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <h1>Linguistics API</h1>
      <LinguistsJson />
      <IOLmedalsJson />
    </div>
  );
}

export default App;
