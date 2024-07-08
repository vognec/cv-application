import '../styles/cvForm.css'

function CvForm({titleData, eduData, jobData}) {
    return (
        <div className='cv-container'>
            <div className='cv-contacts'>
                <div className="cv-contact-name">
                    <p>{titleData.first_name}</p>
                    <p>{titleData.last_name}</p>
                </div>
                <h2 className='cv-contact-header'>Contact</h2>
                <hr className='cv-contact-hr'/>
                <div className="cv-contact-info">
                    <p>{titleData.email}</p>
                    <p>{titleData.phone}</p>
                </div>
            </div>
       
            <div className='cv-history'>
                <h2 className='cv-contact-header'>Work Experience</h2>
                <hr className='cv-history-hr'/>
                <div className='cv-history-data'>
                    <p className='cv-work-name'>{jobData.company_name}</p>
                    <p className='cv-work-title'>{jobData.position}</p>
                    <p className='cv-work-duty'>{jobData.responsibilities}</p>
                    <div className='cv-date'>
                        <p>{jobData.start_date} - {jobData.end_date}</p>
                    </div>
                </div>

                <h2 className='cv-contact-header'>Education</h2>
                <hr className='cv-history-hr'/>
                <div className='cv-history-data'>
                    <p className='cv-edu-name'>{eduData.s_name}</p>
                    <p className='cv-edu-name'>{eduData.degree}</p>
                    <p className='cv-date'>{eduData.start_date} - {eduData.end_date}</p>
                </div>
            </div>
           
        </div>
    )
}

export default CvForm