import Title from '../components/Title.jsx';
import CvForm from '../components/CvForm.jsx';
import Education from '../components/Education.jsx';
import Employment from '../components/Employment.jsx';
import '../styles/app.css'
import { useState } from 'react';


function App() {
  const [titleData, setTitleData] = useState({first_name: '', last_name: '', email: '', phone: ''}); 
  const [eduData, setEduData] = useState({s_name: '', degree: '', start_date: '', end_date: ''});
  const [jobData, setJobData] = useState({company_name: '', position: '',     responsibilities: '', start_date: '', end_date: ''});

return (
  <div className='container'>
    <div className='input-wrapper'>
      <Title setTitleData={setTitleData} titleData={titleData}/>
      <Employment setJobData={setJobData} jobData={jobData} setAddJob={setAddJob} addJob={addJob}/>
      <Education setEduData={setEduData} eduData={eduData}/>  
    </div>
    
    
      <div className="cv-wrapper">
        <CvForm
          titleData={titleData}
          jobData={jobData}
          eduData={eduData}
        />
      </div>

  </div>
)

}

export default App
