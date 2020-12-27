import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [linguists, setLinguists] = useState([]);
  useEffect(() => {
    fetch("/api/linguists").then(
      res => res.json()).then(data => {
      setLinguists(data.linguists);
      console.log(data.linguists);
    });
  }, []);
  
  return (
    <div className="App">
      <p>Hello {linguists[0].name}</p>
    </div>
  );
}

export default App;
