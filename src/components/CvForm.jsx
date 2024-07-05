import '../styles/cvForm.css'

function CvForm({titleData}) {
    return (
        <div className='container'>
            <h1>{titleData.name}</h1>
            <h1>{titleData.email}</h1>
            <h1>{titleData.phone}</h1>
        </div>
    )
}

export default CvForm