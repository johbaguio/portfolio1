import React from 'react';
import resume from '../Static/resume.pdf';
import Header from './Header';

const Resume = () => {
    return (
        <div className='resume'>
            <Header />

            <embed src={resume} type='application/pdf' className='pdf-file' />


        </div>

    )
}

export default Resume;