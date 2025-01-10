import './Links.css'

function Links({socialLinks}) {
    return (
        <ul className='links'>
            {socialLinks.map((link, index)=>(
                <li key={index}>
                    <a href={link.url}>
                        <i className={`bi ${link.iconClass}`}></i>
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Links