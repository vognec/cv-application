import '../styles/cvForm.css'

function CvForm({titleData, eduData, jobData}) {
    return (
        <div>
            <div>
                <p>{titleData.name}</p>
                <p>{titleData.email}</p>
                <p>{titleData.phone}</p>
            </div>
       
            <div>
                <p>{eduData.s_name}</p>
                <p>{eduData.degree}</p>
                <p>{eduData.date}</p>
            </div>
           
            <div>
                <p>{jobData.company_name}</p>
                <p>{jobData.position}</p>
                <p>{jobData.responsibilities}</p>
                <p>{jobData.start_date}</p>
                <p>{jobData.end_date}</p>
            </div>
        </div>
    )
}

export default CvForm