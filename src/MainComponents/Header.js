import hamburger from '../starter-code/assets/icon-hamburger.svg'

export default function Header() {
    return (
        <nav className='header'>
            <h2>THE PLANETS</h2>
            <img src={hamburger} alt='hamburger'/>
        </nav>
    )
}