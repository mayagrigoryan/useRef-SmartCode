import './Logo.css'
import logo from '../../assets/images/logo.png';

function Logo({headerScroll}) {
    return (
        <a href="#" className='logo' onClick={(e) => {
            e.preventDefault();
            headerScroll();
        }}>
            <img src={logo} alt="" />
        </a>
    )
}

export default Logo