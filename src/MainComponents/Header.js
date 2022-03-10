// import hamburger from '/assets/icon-hamburger.svg'

import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <nav className='header'>
            <h2>THE PLANETS</h2>
            <div className="header-navigation">
                <img src="/assets/icon-hamburger.svg" alt='hamburger' className="hamburger" onClick={() => props.toggler()}/>
                <div className="header-navigation-planets">
                    <Link to="/">Mercury</Link>
                    <Link to="Venus">Venus</Link>
                    <Link to="Earth">Earth</Link>
                    <Link to="Mars">Mars</Link>
                    <Link to="Jupiter">Jupiter</Link>
                    <Link to="Saturn">Saturn</Link>
                    <Link to="Uranus">Uranus</Link>
                    <Link to="Neptune">Neptune</Link>
                </div>
            </div>
        </nav>
    )
}