import './Header.css'
import header from '../../assets/images/header.svg'
import Info from '../Info/Info'

function Header({ socialLinks, headerRef }) {
    return (
        <header ref={headerRef} className='header'>
            <div className='container'>
                <Info socialLinks={socialLinks} />
                <img src={header} className='header-image' />
            </div>
        </header>
    )
}

export default Header