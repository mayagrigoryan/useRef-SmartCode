import './CoursesBox.css'

function CoursesBox({courses}) {
    return(
        <div className='courses-box'>
                    {courses.map((course, index) => (
                        <div className='course-item' key={index}>
                            <a href={course.link}>
                                <img src={course.image} alt={course.name} />
                            </a>
                            <h2>{course.name}</h2>
                            <h3>{course.type}</h3>
                            <a href={course.link} className='btn-act'>Դիտել</a>
                            <p>
                                <span>{course.duration}</span>
                                <span>{course.price} ֏</span>
                            </p>
                        </div>
                    ))}
                </div>
    )
}

export default CoursesBox