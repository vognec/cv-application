import Title from '../components/Title.jsx';
import CvForm from '../components/CvForm.jsx';
import '../styles/app.css'
import { useState } from 'react';


function App() {
  const [titleData, setTitleData] = useState( {name: '', email: '', phone: ''} ); 

return (
  <div className='container'>

    <Title setTitleData={setTitleData} titleData={titleData} />
    <CvForm titleData={titleData}/>
  </div>
)

}

export default App
