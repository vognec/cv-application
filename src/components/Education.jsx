import '../styles/info.css'

function Education( {eduData, setEduData}){

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEduData((prevEduData) => ({
            ...prevEduData,
            [name]: value,
        }));
    };
    return (  
        <ul className='accordion'>
                <li>
                    <input type="radio" name='accordion' id='edu_content'/>
                    <label htmlFor="edu_content">Education</label>
                    <form className='content'>
                        <div>
                           <label htmlFor="s_name">School Name</label>
                            <input
                                type="text"
                                name="s_name"
                                id="s_name"
                                placeholder="ex: UT Austin"
                                value={eduData.s_name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                           <label htmlFor="degree">Degree</label>
                            <input
                                type="text"
                                name="degree"
                                id="degree"
                                placeholder="ex: Computer Science"
                                value={eduData.degree}
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
                                value={eduData.start_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                           <label htmlFor="end_date">end Date</label>
                            <input
                                type="text"
                                name="end_date"
                                id="end_date"
                                placeholder="mm/dd/yyyy"
                                value={eduData.end_date}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </li>
        </ul>
)

}

export default Education