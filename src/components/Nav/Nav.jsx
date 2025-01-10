import './Nav.css'
import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import Button from '../Button/Button'

function Nav({menu, sectionScroll, headerScroll}) {
    return(
        <nav className='nav'>
            <div className='container'>
                <Logo headerScroll={headerScroll}/>
                <Menu sectionScroll={sectionScroll} menu={menu}/>
                <Button />
            </div>
        </nav>
    )
}

export default Nav