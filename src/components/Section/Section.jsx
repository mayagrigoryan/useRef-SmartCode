import './Section.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import SectionBox from '../SectionBox/SectionBox'

function Section({courses, sectionRef}){
    return(
        <section ref={sectionRef} className='courses bg-silver'>
            <div className='container'>
                <SectionTitle />
                <SectionBox courses={courses}/>
            </div>
        </section>
    )
}

export default Section