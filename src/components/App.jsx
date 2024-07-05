import Title from '../components/Title.jsx';
import CvForm from '../components/CvForm.jsx';
import Education from '../components/Education.jsx';
import '../styles/app.css'
import { useState } from 'react';


function App() {
  const [titleData, setTitleData] = useState( {name: '', email: '', phone: ''} ); 
  const [eduData, setEduData] = useState({s_name: '', degree: '', date: ''});

return (
  <div className='container'>
    <div className='info-card'>
      <Title setTitleData={setTitleData} titleData={titleData} />
      <Education setEduData={setEduData} eduData={eduData}/>
    </div>
    <div>
      <CvForm 
        titleData={titleData}
        eduData={eduData}
      />
    </div>
  </div>
)

}

export default App
