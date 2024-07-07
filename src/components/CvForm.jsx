import '../styles/cvForm.css'

function CvForm({titleData, eduData, jobData}) {
    return (
        <div>
            <div className='cv-header'>
                <p>{titleData.name}</p>
                <p>{titleData.email}</p>
                <p>{titleData.phone}</p>
            </div>
       
            <div className='cv-body'>
                <p>{jobData.company_name}</p>
                <p>{jobData.position}</p>
                <p>{jobData.responsibilities}</p>
                <p>{jobData.start_date}</p>
                <p>{jobData.end_date}</p>
            </div>

            <div className='cv-footer'>
                <p>{eduData.s_name}</p>
                <p>{eduData.degree}</p>
                <p>{eduData.date}</p>
            </div>
           
        </div>
    )
}

export default CvForm