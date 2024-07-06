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
    

            <ul className='accordion'>
                <li>
                    <input type="radio" name='accordion' id='exp_content'/>
                    <label htmlFor="exp_content">Experience</label>
                    <form className='content'>
                        <div>
                            <label htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                name="company_name"
                                id="company_name"
                                placeholder="ex: HEB"
                                value={jobData.company_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="position">Position</label>
                            <input
                                type="text"
                                name="position"
                                id="position"
                                placeholder="ex: Software Engineer"
                                value={jobData.position}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="responsibilities">Responsibilities</label>
                            <input
                                type="text"
                                name="responsibilities"
                                id="responsibilities"
                                placeholder="job description"
                                value={jobData.responsibilities}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="start_date">Start Date</label>
                            <input
                                type="text"
                                name="start_date"
                                id="start_date"
                                placeholder="mm/dd/yyyy"
                                value={jobData.start_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="end_date">End Date</label>
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
                </li>
            </ul>
    )
}

export default Employment