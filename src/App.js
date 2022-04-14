
import {useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from "./MainComponents/Header";
import Data from './data.json'
import useWindowSize from './Helper/useWindowSize';

import Earth from './MainComponents/planets/Earth'
import Jupiter from './MainComponents/planets/Jupiter'
import Mars from './MainComponents/planets/Mars'
import Mercury from './MainComponents/planets/Mercury'
import Neptune from './MainComponents/planets/Neptune'
import Saturn from './MainComponents/planets/Saturn'
import Uranus from './MainComponents/planets/Uranus'
import Venus from './MainComponents/planets/Venus'

function App() {
  const [selectedButton, setSelectedButton] = useState('overview')
  const [planets, setPlanets] = useState(Data)
  const [planetColor, setPlanetColor] = useState([
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune"
  ])
  const size = useWindowSize()

  function body(index) {
    const planet = planets[index]

    function description() {
      if (selectedButton === 'overview') {
        return (
          <>
            <p className="description">{planet.overview.content}</p>
            <p className="description">Source : <a href={planet.overview.source} className="wiki-link" target="_blank">Wikipedia</a> <img src="/assets/icon-source.svg"/></p>
          </>
        )
      } else if (selectedButton === 'structure') {
        return (
          <>
            <p className="description">{planet.structure.content}</p>
            <p className="description">Source : <a href={planet.structure.source} className="wiki-link" target="_blank">Wikipedia</a> <img src="/assets/icon-source.svg"/></p>
          </>
        )
      } else if (selectedButton === 'geology') {
        return (
          <>
            <p className="description">{planet.geology.content}</p>
            <p className="description">Source : <a href={planet.geology.source} className="wiki-link" target="_blank">Wikipedia</a> <img src="/assets/icon-source.svg"/></p>
          </>
        )
      }
    }

    function planetImage() {
      if (selectedButton === 'overview') {
        return <img src={planet.images.planet} alt="mercury" className="img-planet" />
      } else if (selectedButton === 'structure') {
        return <img src={planet.images.internal} alt="mercury" className="img-planet" />
      } else if (selectedButton === 'geology') {
        return (
          <>
            <img src={planet.images.planet} alt="mercury" className="img-planet" />
            <img src={planet.images.geology} alt="mercury" className="img-planet-geology" />
          </>
        )
      }
    }

    return (
      <div className="main-body">
          <div className="BS-info-buttons">
              <button className={`button-one ${planetColor[index]}`} onClick={() => setSelectedButton('overview')}>Overview</button>

              <button className={`button-two ${planetColor[index]}`} onClick={() => setSelectedButton('structure')}>{size.width >= 480 ? "Internal Structure" : "structure"}</button>

              <button className={`button-three ${planetColor[index]}`} onClick={() => setSelectedButton('geology')}>{size.width >= 480 ? "Surface Geology" : "surface"}</button>
          </div>
          {planetImage()}
          <div className="info">
              <h1 className="title">{planet.name}</h1>
              {description()}
          </div>
          <div className='footer'>
              <div className='footer-info'>
                  <p>rotation time</p>
                  <h3>{planet.rotation}</h3>
              </div>
              <div className='footer-info'>
                  <p>revolution time</p>
                  <h3>{planet.revolution}</h3>
              </div>
              <div className='footer-info'>
                  <p>radius</p>
                  <h3>{planet.radius}</h3>
              </div>
              <div className='footer-info'>
                  <p>average temp.</p>
                  <h3>{planet.temperature}</h3>
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
            element={ <Mercury>{body(0)}</Mercury> }
          />
          <Route 
            path="/Venus" 
            element={ <Venus>{body(1)}</Venus> }
          />
          <Route 
            path="/Earth" 
            element={ <Earth>{body(2)}</Earth> }
          />
          <Route 
            path="/Mars" 
            element={ <Mars>{body(3)}</Mars> }
          />
          <Route 
            path="/Jupiter" 
            element={ <Jupiter>{body(4)}</Jupiter> }
          />
          <Route 
            path="/Saturn" 
            element={ <Saturn>{body(5)}</Saturn> }
          />
          <Route 
            path="/Uranus" 
            element={ <Uranus>{body(6)}</Uranus> }
          />
          <Route 
            path="/Neptune" 
            element={ <Neptune>{body(7)}</Neptune> }
          />
        </Routes>

    </div>
  );
}

export default App;


// 1. declare a state called selectedButton with a default "overview"
// 2. create 3 anonymous functions inside an onClick for each button that will change the state to "overview", "structure", "surface"
// 3. create conditional statements inside curly brackets and have conditions depending on what the state currently is.