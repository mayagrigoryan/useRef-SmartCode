import React, { forwardRef } from 'react';
import './Section.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionBox from '../SectionBox/SectionBox';

const Section = forwardRef(({ courses }, ref) => {
    return (
        <section ref={ref} className='courses bg-silver'>
            <div className='container'>
                <SectionTitle />
                <SectionBox courses={courses} />
            </div>
        </section>
    );
});

export default Section;
