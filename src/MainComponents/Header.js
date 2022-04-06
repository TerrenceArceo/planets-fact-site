// import hamburger from '/assets/icon-hamburger.svg'

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../Helper/useWindowSize'

export default function Header(props) {
    const [isShown, setIsShown] = useState(false)
    const size = useWindowSize()

    function toggleNav() {
        setIsShown(prevState => !prevState)
    }

    

    return (
        <nav className='header'>
            <div className="header-navigation">
                <h2>THE PLANETS</h2>
                <img src="/assets/icon-hamburger.svg" alt='hamburger' className="hamburger" onClick={toggleNav}/>
            </div>
            {isShown || size.width >= 480 ? <ul className="header-navigation-planets">
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='mercury-dot'></span>
                        <Link to="/">Mercury</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='venus-dot'></span>
                        <Link to="Venus">Venus</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='earth-dot'></span>
                        <Link to="Earth">Earth</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='mars-dot'></span>
                        <Link to="Mars">Mars</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='jupiter-dot'></span>
                        <Link to="Jupiter">Jupiter</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='saturn-dot'></span>
                        <Link to="Saturn">Saturn</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='uranus-dot'></span>
                        <Link to="Uranus">Uranus</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                    <li className='planet' onClick={() => setIsShown(false)}>
                        <span className='neptune-dot'></span>
                        <Link to="Neptune">Neptune</Link>
                        <img src='/assets/icon-chevron.svg' className='chevron' />
                    </li>
                </ul> : null}
        </nav>
    )
}