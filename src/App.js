
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


// we will try to use props.children and we will only have one body.
// and then to avoid repetition of code, we will create a single function that handles all of that, that takes in a parameter which is the index
// so everytime we press a different planet, we will input the index of that planet and re-render the body.