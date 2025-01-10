import './Info.css'
import Button from '../Button/Button'
import Play from '../Play/Play'
import Links from '../Links/Links'

function Info({socialLinks}) {
    return (
        <div className='info'>
            <h1>
                <span>Սովորի՛ր</span>
                &nbsp;ծրագրավորում
                <br />
                <span>Դարձի՛ր</span>
                &nbsp;պահանջված մասնագետ
            </h1>
            <p>Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։</p>
            <div className='header-action'>
                <Button />
                <Play />
            </div>
            <Links socialLinks={socialLinks}/>
        </div>
    )
}

export default Info