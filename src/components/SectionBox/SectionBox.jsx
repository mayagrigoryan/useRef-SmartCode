import './SectionBox.css'
import sectionImage from '../../assets/images/per4.svg'
import CoursesBox from '../CoursesBox/CoursesBox'

function SectionBox({ courses }) {
    return (
        <div className='section-box'>
            <div className='section-info'>
                <CoursesBox courses={courses}/>
            </div>
            <img src={sectionImage} className='section-image' />
        </div>
    )
}

export default SectionBox
