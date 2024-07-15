import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import Cv from './Cv';
import JobInfo from './JobInfo';
import EduInfo from './EduInfo';

function App() {
  const [basicInfo, setBasicInfo] = useState(
    {
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
  );
  const [jobInfo, setJobInfo] = useState([]);
  const [eduInfo, setEduInfo] = useState([]);

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
    <div className='app-container ibm-plex-mono-regular'>
       <div className='app-input-container'>
        <BasicInfo basicInfo={basicInfo} onChange={handleBasicInputChange} />
        <JobInfo jobInfo={jobInfo} setJobInfo={setJobInfo} onChange={handleJobInputChange} />
        <EduInfo eduInfo={eduInfo} setEduInfo={setEduInfo} onChange={handleEduInputChange}/>  
      </div>      
      <div className='app-cv-container'>
        <Cv basicInfo={basicInfo} jobInfo={jobInfo} eduInfo={eduInfo}/>
      </div>
    </div>
  );
};

export default App;
