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
                           <label htmlFor="date">Date Attended</label>
                            <input
                                type="text"
                                name="date"
                                id="date"
                                placeholder="mm/dd/yyyy"
                                value={eduData.date}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </li>
        </ul>
)

}

export default Education