
import {useState} from 'react'
import Header from "./MainComponents/Header";
import Body from './MainComponents/Body'
import Data from './starter-code/data.json'

function App() {
  const [planets, setPlanets] = useState(Data)

  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
