
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./MainComponents/Header";
import Body from './MainComponents/Body'
import Data from './starter-code/data.json'
import source from './starter-code/assets/icon-source.svg'

import Earth from './MainComponents/planets/Earth'
import Jupiter from './MainComponents/planets/Jupiter'
import Mars from './MainComponents/planets/Mars'
import Mercury from './MainComponents/planets/Mercury'
import Neptune from './MainComponents/planets/Neptune'
import Saturn from './MainComponents/planets/Saturn'
import Uranus from './MainComponents/planets/Uranus'
import Venus from './MainComponents/planets/Venus'

function App() {
  const [planets, setPlanets] = useState(Data)

  function body() {
    return (
      <div className="main-body">
            <div className="info-buttons">
                <button>Overview</button>
                <button>Structure</button>
                <button>Surface</button>
            </div>
            <img src="#" alt="mercury" className="img-planet"/>
            <div className="info">
                <h1 className="title">Mercury</h1>
                <p className="description">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terres trial planets in the Solar System, and is a rocky body like Earth.</p>
                <p className="description">Source : <a href="#" className="wiki-link">Wikipedia</a> <img src={source}/></p>
            </div>
            <div className='footer'>
                <div className='footer-info'>
                    <p>rotation time</p>
                    <h3>58.6 days</h3>
                </div>
                <div className='footer-info'>
                    <p>revolution time</p>
                    <h3>87.97 days</h3>
                </div>
                <div className='footer-info'>
                    <p>radius</p>
                    <h3>2,439.7 km</h3>
                </div>
                <div className='footer-info'>
                    <p>average temp.</p>
                    <h3>430°c</h3>
                </div>
            </div>
        </div>
    )
  }

  return (
    <div className="container">
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={ <Mercury>{body()}</Mercury>}
        />
      </Routes>


    </div>
  );
}

export default App;


// we will try to use props.children and we will only have one body.
// and then to avoid repetition of code, we will create a single function that handles all of that, that takes in a parameter which is the index
// so everytime we press a different planet, we will input the index of that planet and re-render the body.