import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import Cv from './Cv';
import JobInfo from './JobInfo';
import {v4 as uuid} from 'uuid'

function App() {
  const [basicInfo, setBasicInfo] = useState(
    {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
  );
  const [jobInfo, setJobInfo] = useState([
    {
        jobName: '',
        jobTitle: '',
        jobDuties: '',
        jobStartDate: '',
        jobEndDate: '',
        id: uuid()
    }
  ]);
 
  const handleBasicInputChange = (e) => {
    const {name, value} = e.target;
    setBasicInfo( prevBasicInfo => ({
        ...prevBasicInfo,
        [name]: value,
    }));
  }
  const handleJobInputChange = (index, e) => {
    const {name, value} = e.target;
    const newJobInfo = [...jobInfo];
    newJobInfo[index][name] = value;
    setJobInfo(newJobInfo);
  }

  return (
    <div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInputChange} />
      <hr />
      <JobInfo jobInfo={jobInfo} onChange={handleJobInputChange} />
      <hr />
      <Cv basicInfo={basicInfo} jobInfo={jobInfo}/>
    </div>
  );
};

export default App;
