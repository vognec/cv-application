import {v4 as uuid} from 'uuid'

function EduInfo( {eduInfo, setEduInfo, onChange} ) {

    const handleAddEduClick = () => {
        const edu = {
            eduName: '',
            eduDegree: '',
            eduGPA: '',
            eduStartDate: '',
            eduEndDate: '',
            id: uuid()
        }
        const newEdu = [...eduInfo, edu];
        setEduInfo(newEdu);
    }
    return (
        <div>
            {eduInfo.map((item, index) => (
                <div key={item.id}>
                    <label>
                        School Name:
                        <input
                            type='text'
                            name='eduName'
                            value={eduInfo.eduName} 
                            onChange={(e) => onChange(index, e)}
                            >
                        </input>
                    </label>
                    <label>
                        Degree:
                        <input
                            type='text'
                            name='eduDegree'
                            value={eduInfo.eduDegree} 
                            onChange={(e) => onChange(index, e)}
                            >
                        </input>
                    </label>
                    <label>
                        GPA:
                        <input
                            type='text'
                            name='eduGPA'
                            value={eduInfo.eduGPA} 
                            onChange={(e) => onChange(index, e)}
                            >
                        </input>
                    </label>
                    <label>
                        Start Date:
                        <input
                            type='text'
                            name='eduStartDate'
                            value={eduInfo.eduStartDate} 
                            onChange={(e) => onChange(index, e)}
                            >
                        </input>
                    </label>
                    <label>
                        End Date:
                        <input
                            type='text'
                            name='eduEndDate'
                            value={eduInfo.eduEndDate} 
                            onChange={(e) => onChange(index, e)}
                            >
                        </input>
                    </label>
                </div>
            ))}
            <button onClick={handleAddEduClick}>Add Education</button>
        </div>
    )
}

export default EduInfo