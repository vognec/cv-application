import '../styles/info.css'

function Employment({jobData, setJobData}){

    const handleChange = (e) => {
        const {name, value} = e.target;
        setJobData((prevJobData) => ({
            ...prevJobData,
            [name]: value,
        }))
    }

    return (
        <>
        <button className='collapsible'>Add employment</button>
        <div className="container content">
            <div>
                <p className="section-title">Experience</p>
                <form>
                    <div className="input-wrapper">
                        <div className="label-wrapper"><label className="label-text" htmlFor="company">Company Name</label></div>
                        <input
                            type="text"
                            name="company_name"
                            id="company_name"
                            placeholder="ex: HEB"
                            value={jobData.company_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label-wrapper"><label className="label-text" htmlFor="position">Position</label></div>
                        <input
                            type="text"
                            name="position"
                            id="position"
                            placeholder="ex: Software Engineer"
                            value={jobData.position}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label-wrapper"><label className="label-text" htmlFor="responsibilities">Responsibilities</label></div>
                        <input
                            type="text"
                            name="responsibilities"
                            id="responsibilities"
                            placeholder="job description"
                            value={jobData.responsibilities}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label-wrapper"><label className="label-text" htmlFor="start_date">Start Date</label></div>
                        <input
                            type="text"
                            name="start_date"
                            id="start_date"
                            placeholder="mm/dd/yyyy"
                            value={jobData.start_date}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-wrapper">
                        <div className="label-wrapper"><label className="label-text" htmlFor="end_date">End Date</label></div>
                        <input
                            type="text"
                            name="end_date"
                            id="end_date"
                            placeholder="mm/dd/yyyy"
                            value={jobData.end_date}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Employment