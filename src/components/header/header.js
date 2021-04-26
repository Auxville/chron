import Logo from './Header_logo.svg'
import './header.css'


function Header () {
    return (
    <header className="header">
        <div className="header-logo">
            <a href="/"><img src={Logo}></img></a>
        </div>
        <nav className="header-nav">
            <ul>
                <li><a href="">О проекте</a></li>
                <li><a href="">Преимущества</a></li>
                <li><a href="">Цены</a></li>
                <li><a href="">FAQ</a></li>
            </ul>
        </nav>
        <div className="header-button"><button>Подать заявку</button></div>
    </header>
    )}

export default Header;