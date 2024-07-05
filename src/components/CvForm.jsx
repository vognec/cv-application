import '../styles/cvForm.css'

function CvForm({titleData, eduData}) {
    return (
        <div>
            <div>
                <h1>{titleData.name}</h1>
                <h1>{titleData.email}</h1>
                <h1>{titleData.phone}</h1>
            </div>
            <div>
                <h1>{eduData.s_name}</h1>
                <h1>{eduData.degree}</h1>
                <h1>{eduData.date}</h1>
            </div>
        </div>
    )
}

export default CvForm