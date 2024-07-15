import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import Cv from './Cv';
import JobInfo from './JobInfo';
import EduInfo from './EduInfo';
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
  const [eduInfo, setEduInfo] = useState([
    {
        eduName: '',
        eduDegree: '',
        eduGPA: '',
        eduStartDate: '',
        eduEndDate: '',
        id: uuid()
    }
  ])
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

  const handleEduInputChange = (index, e) => {
    const {name, value} = e.target;
    const newEduInfo = [...eduInfo];
    newEduInfo[index][name] = value;
    setEduInfo(newEduInfo);
  }

  return (
    <div>
      <BasicInfo basicInfo={basicInfo} onChange={handleBasicInputChange} />
      <hr />
      <JobInfo jobInfo={jobInfo} setJobInfo={setJobInfo} onChange={handleJobInputChange} />
      <hr />
      <EduInfo eduInfo={eduInfo} setEduInfo={setEduInfo} onChange={handleEduInputChange}/>
      <hr/>
      <Cv basicInfo={basicInfo} jobInfo={jobInfo} eduInfo={eduInfo}/>
    </div>
  );
};

export default App;
