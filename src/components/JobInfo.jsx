import {v4 as uuid} from 'uuid'
import { useState } from 'react';

function JobInfo({jobInfo, setJobInfo, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isAddJobOpen, setAddJobOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
        if (isAddJobOpen) {
            setAddJobOpen(false);
        }
    }
    
    function handleAddJobClick()  {
         const newJob = {jobName: '',
            jobTitle: '',
            jobDuties: '',
            jobStartDate: '',
            jobEndDate: '',
            id: uuid()}
        const updatedJobInfo = [...jobInfo, newJob];
        setJobInfo(updatedJobInfo);
        setAddJobOpen(true); 
    }
    return (
        <div className='accordion'>
           <div className='accordion-item'> 
            <div className='accordion-header' onClick={toggleAccordion}>Employment</div>
            <div className='accordion-btn-wrapper'>
                <button className={`accordion-button ${isOpen ? 'active' : ''}`}
                onClick={handleAddJobClick}>
                    Add Job
                </button>
            </div>
            <div className={`accordion-content ${isAddJobOpen ? 'open' : ''}`}>
            {jobInfo.map((job, index) => (
                    <form key={job.id} className='accordion-inputs'>
                        <label htmlFor='jobName'>
                            Job Name
                        </label>
                        <input
                                type="text"
                                id='jobName'
                                name="jobName"
                                value={job.jobName}
                                onChange={(e)=>onChange(index, e)}
                                >
                         </input>
                        <label htmlFor='jobTitle'>
                            Job Title
                        </label>
                        <input
                                type="text"
                                id='jobTitle'
                                name="jobTitle"
                                value={job.jobTitle}
                                onChange={(e)=>onChange(index, e)}
                                >
                        </input>
                        <label htmlFor='jobDuties'>
                            Job Duties
                        </label>
                        <input
                                type="text"
                                name="jobDuties"
                                value={job.jobDuties}
                                onChange={(e)=>onChange(index, e)}
                                >
                        </input>
                        <label htmlFor='jobStartDate'>
                            Start Date
                        </label>
                        <input
                                type="text"
                                id='jobStartDate'
                                name="jobStartDate"
                                value={job.jobStartDate}
                                onChange={(e)=>onChange(index, e)}
                                >
                        </input>
                        <label htmlFor='jobEndDate'>
                            End Date
                        </label>
                        <input
                                type="text"
                                id='jobEndDate'
                                name="jobEndDate"
                                value={job.jobEndDate}
                                onChange={(e)=>onChange(index, e)}
                                >
                        </input>
                    </form>
                )
                )}
            </div>
            </div>
        </div>
    )
    
}

export default JobInfo