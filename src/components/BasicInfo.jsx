import '../styles/styles.css'
import { useState } from 'react';

function BasicInfo({ basicInfo, onChange}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  }
  return (
      <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header" onClick={toggleAccordion}>
                Basic Info
              </div>
              <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className='accordion-inputs'>
                  <label htmlFor='firstName'>
                    First Name:
                  </label>
                  <input
                      type="text"
                      id='firstName'
                      name="firstName"
                      value={basicInfo.firstName}
                      onChange={onChange}
                    />
                  <label htmlFor='lastName'>
                    Last Name:
                  </label>
                  <input
                      type="text"
                      id='lastName'
                      name="lastName"
                      value={basicInfo.lastName}
                      onChange={onChange}
                    />
                  <label htmlFor='email'>
                    Email:
                  </label>
                  <input
                      type="email"
                      id='email'
                      name="email"
                      value={basicInfo.email}
                      onChange={onChange}
                    />
                  <label htmlFor='phone'>
                    Phone:
                  </label>
                  <input
                      type="text"
                      id='phone'
                      name="phone"
                      value={basicInfo.phone}
                      onChange={onChange}
                    />
                </div>
              </div>
            </div>
      </div>
  );
};

export default BasicInfo;
