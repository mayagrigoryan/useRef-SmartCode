import './Menu.css'

function Menu({ menu, sectionScroll }) {

    return (
        <ul className='menu'>
            {
                menu.map((m, index) => {
                    return (
                        <li key={index}>
                            <a href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionScroll();
                                }}
                            >{m}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Menu