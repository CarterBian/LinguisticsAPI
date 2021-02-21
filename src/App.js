import LinguistsJson from './components/LinguistsJson';
import IOLmedalsJson from './components/IOLmedalsJson';
import LandingPage from './components/LandingPage'
import './App.css';
import styled from 'styled-components';

const TextContainer = styled.div`
   font-family : "courier","sans-serif";
   font-size : ${(props) => props.size}px;
   text-align: center;
   align-self:center;
   color: white;
   padding-bottom: 1em;
   margin-top: 10px;
`

function App() {
  
  return (
    <div className="App">
      <LandingPage title={"Linguistics API"}/>
      <TextContainer size={28}><b>Get</b> up-to-date JSON with Linguistics API</TextContainer>
      <TextContainer size={25}><b>Fueled</b> by continuously web scraped data</TextContainer>
      <TextContainer size={22}><b>Choose</b> between categories ... </TextContainer>
      <LinguistsJson />
      <TextContainer size={22}><b>Get</b> recent olympiad results ... </TextContainer>
      <IOLmedalsJson />
    </div>
  );
}

export default App;
