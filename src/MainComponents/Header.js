import hamburger from '../starter-code/assets/icon-hamburger.svg'

export default function Header() {
    return (
        <div className='header'>
            <h1>THE PLANETS</h1>
            <img src={hamburger} alt='hamburger'/>
        </div>
    )
}