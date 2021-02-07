import LinguistsJson from './components/LinguistsJson';
import IOLmedalsJson from './components/IOLmedalsJson';
import LandingPage from './components/LandingPage'
import './App.css';

function App() {
  
  return (
    <div className="App">
      <LandingPage title={"Linguistics API"}/>
      {/* <h1>Linguistics API</h1> */}
      <LinguistsJson />
      <IOLmedalsJson />
    </div>
  );
}

export default App;
