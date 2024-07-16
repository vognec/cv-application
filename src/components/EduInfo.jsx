import {v4 as uuid} from 'uuid'
import { useState } from 'react';

function EduInfo( {eduInfo, setEduInfo, onChange} ) {
    const [isOpen, setIsOpen] = useState(false);
    const [isAddEduOpen, setIsAddEduOpen] = useState(false);

    let eduInfoLength = eduInfo.length;

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        if (isAddEduOpen) {
            setIsAddEduOpen(false);
        }
    }
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
        setIsAddEduOpen(true);
    }

    const handleDeleteEduClick = () => {
        const copyEduInfo = [...eduInfo];
        copyEduInfo.splice(-1);
        setEduInfo(copyEduInfo);
    }
    return (
        <div className='accordion'>
            <div className="accordion-item">
                <div className='accordion-header' onClick={toggleAccordion}>Education</div>
                <div className="accordion-btn-wrapper btm-padding">
                    <button className={`accordion-button ${isOpen ? 'active' : ''}`} onClick={handleAddEduClick}>
                        Add Education
                        </button>
                </div>
                <div className={`accordion-content ${isAddEduOpen ? 'open' : ''}`}>
                    {eduInfo.map((item, index) => (
                        <div className='accordion-inputs' key={item.id}>
                            <label htmlFor='eduName'>
                                School Name:
                            </label>
                            <input
                                type='text'
                                id='eduName'
                                name='eduName'
                                value={eduInfo.eduName}
                                onChange={(e) => onChange(index, e)}
                            >
                            </input>
                            <label htmlFor='eduDegree'>
                                Degree:
                            </label>
                            <input
                                type='text'
                                id='eduDegree'
                                name='eduDegree'
                                value={eduInfo.eduDegree}
                                onChange={(e) => onChange(index, e)}
                            >
                            </input>
                            <label htmlFor='eduGPA'>
                                GPA:
                            </label>
                            <input
                                type='text'
                                id='eduGPA'
                                name='eduGPA'
                                value={eduInfo.eduGPA}
                                onChange={(e) => onChange(index, e)}
                            >
                            </input>
                            <label htmlFor='eduStartDate'>
                                Start Date:
                            </label>
                            <input
                                type='text'
                                id='eduStartDate'
                                name='eduStartDate'
                                value={eduInfo.eduStartDate}
                                onChange={(e) => onChange(index, e)}
                            >
                            </input>
                            <label htmlFor='eduEndDate'>
                                End Date:
                            </label>
                            <input
                                type='text'
                                id='eduEndDate'
                                name='eduEndDate'
                                value={eduInfo.eduEndDate}
                                onChange={(e) => onChange(index, e)}
                            >
                            </input>
                        </div>
                    ))}
                    {eduInfoLength > 0 && <div className='accordion-btn-wrapper'>
                    <button className='delete-btn' onClick={handleDeleteEduClick}>
                        Delete Job
                    </button>
                </div>}
                </div>
            </div>
        </div>
    )
}

export default EduInfo