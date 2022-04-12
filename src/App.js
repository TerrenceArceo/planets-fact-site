
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

    return (
      <div className="main-body">
          {size.width < 480 ? 
            <div className="info-buttons">
                <button className={`${planetColor[index]}`}>Overview</button>
                <button className={`${planetColor[index]}`}>Structure</button>
                <button className={`${planetColor[index]}`}>Surface</button>
            </div> 
            :
            <div className="BS-info-buttons">
                <button className={`button-one ${planetColor[index]}`}>Overview</button>
                <button className={`button-two ${planetColor[index]}`}>Internal structure</button>
                <button className={`button-three ${planetColor[index]}`}>Surface Geology</button>
            </div>
          }
          <img src={planet.images.planet} alt="mercury" className="img-planet" />
          <div className="info">
              <h1 className="title">{planet.name}</h1>
              <p className="description">{planet.overview.content}</p>
              <p className="description">Source : <a href={planet.overview.source} className="wiki-link">Wikipedia</a> <img src="/assets/icon-source.svg"/></p>
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