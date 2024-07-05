import Title from '../components/Title.jsx';
import CvForm from '../components/CvForm.jsx';
import Education from '../components/Education.jsx';
import Employment from '../components/Employment.jsx';
import '../styles/app.css'
import { useState } from 'react';


function App() {
  const [titleData, setTitleData] = useState({name: '', email: '', phone: ''}); 
  const [eduData, setEduData] = useState({s_name: '', degree: '', date: ''});
  const [jobData, setJobData] = useState({company_name: '', position: '',     responsibilities: '', start_date: '', end_date: ''});

return (
  <div className='container'>
    <div>
      <Title setTitleData={setTitleData} titleData={titleData} />
      <Education setEduData={setEduData} eduData={eduData}/>  
      <Employment setJobData={setJobData} jobData={jobData} />
    </div>
    
    <div>
      <CvForm 
        titleData={titleData}
        eduData={eduData}
        jobData={jobData}
      />
    </div>
  </div>
)

}

export default App
