
import {useState} from 'react'
import Header from "./MainComponents/Header";
import Data from './starter-code/data.json'

function App() {
  const [planets, setPlanets] = useState(Data)
  
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
