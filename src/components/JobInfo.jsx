import {v4 as uuid} from 'uuid'

function JobInfo({jobInfo, setJobInfo, onChange}) {

    function handleAddJobClick()  {
         const newJob = {jobName: '',
            jobTitle: '',
            jobDuties: '',
            jobStartDate: '',
            jobEndDate: '',
            id: uuid()}
        const updatedJobInfo = [...jobInfo, newJob];
        setJobInfo(updatedJobInfo); 
    }
    return (
        <div>
            
            {jobInfo.map((job, index) => (
                <form key={job.id}>
                    <label>
                        Job Name 
                        <input 
                            type="text"
                            name="jobName"
                            value={job.jobName}
                            onChange={(e)=>onChange(index, e)}
                            ></input>
                    </label>
                    <label>
                        Job Title 
                        <input 
                            type="text"
                            name="jobTitle"
                            value={job.jobTitle}
                            onChange={(e)=>onChange(index, e)}
                            ></input>
                    </label>
                    <label>
                        Job Duties 
                        <input 
                            type="text"
                            name="jobDuties"
                            value={job.jobDuties}
                            onChange={(e)=>onChange(index, e)}
                            ></input>
                    </label>
                    <label>
                        Start Date 
                        <input 
                            type="text"
                            name="jobStartDate"
                            value={job.jobStartDate}
                            onChange={(e)=>onChange(index, e)}
                            ></input>
                    </label>
                    <label>
                        End Date 
                        <input 
                            type="text"
                            name="jobEndDate"
                            value={job.jobEndDate}
                            onChange={(e)=>onChange(index, e)}
                            ></input>
                    </label>
                </form>
            )
            )}
            <button onClick={handleAddJobClick}>Add Job</button>
        </div>
    )
    
}

export default JobInfo