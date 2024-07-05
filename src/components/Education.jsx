import '../styles/info.css'

function Education( {eduData, setEduData}){

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log({name, value})
        setEduData((prevEduData) => ({
            ...prevEduData,
            [name]: value,
        }));
    };
    return (
        <div className='container'>
            <div>
                <p className='section-title'>Education</p>
                <form>
                    <div className='input-wrapper'>
                        <div className='label-wrapper'><label className='label-text' htmlFor="s_name">School Name</label></div>
                        <input
                            type="text"
                            name="s_name"
                            id="s_name"
                            placeholder="ex: UT Austin"
                            value={eduData.s_name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <div className='label-wrapper'><label className='label-text' htmlFor="degree">Degree</label></div>
                        <input
                            type="text"
                            name="degree"
                            id="degree"
                            placeholder="ex: Computer Science"
                            value={eduData.degree}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-wrapper'>
                        <div className='label-wrapper'><label className='label-text' htmlFor="date">Date Attended</label></div>
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
            </div>
        </div>
    )

}

export default Education