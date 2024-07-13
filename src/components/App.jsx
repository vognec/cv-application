import React, { useState } from 'react';
import BasicInfo from './BasicInfo';
import CV from './Cv';
import {v4 as uuid} from 'uuid'

function App() {
  const [basicInfo, setBasicInfo] = useState([
    {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      id: 0
    }
  ]);

  
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedBasicInfo = [...basicInfo];
    updatedBasicInfo[index][name] = value;
    setBasicInfo(updatedBasicInfo);
  };

  return (
    <div>
      <BasicInfo basicInfo={basicInfo} handleInputChange={handleInputChange} />
      <hr />
      <CV basicInfo={basicInfo} />
    </div>
  );
};

export default App;
