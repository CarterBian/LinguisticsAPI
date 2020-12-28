import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [linguists, setLinguists] = useState([]);
  useEffect(() => {
    fetch("https://linguistics-api.herokuapp.com/api/linguists").then(
      res => res.json()).then(data => {
      setLinguists(data.linguists);
    });
  }, []);
  
  return (
    <div className="App">
      {linguists.length > 0 && 
        <p>Hello {linguists[0].name}</p>
      }
    </div>
  );
}

export default App;
