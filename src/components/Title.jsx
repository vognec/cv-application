import '../styles/info.css'
import { useState } from 'react';

function Tittle( {titleData, setTitleData}){

  // handleChange is set as onChange event handler for each input element, every time input field changes, handChange is called.
    const handleChange = (e) => {
      // the event is destructed to pull out the name and value attributes from the input event that fired
      const {name, value} = e.target;      
      // setTitleData is called with a callback function that takes previous state data and returns new state object.
      setTitleData((prevTitleData) => ({   
              // new state object is created using the spread operator to copy existing fields from prevTitleData
        ...prevTitleData,
        // field corresponding to 'name' is updated with the new value entered
        [name]: value,
      }));
    };

   
    return (

      <ul className="accordion">
          <li>
            <input 
              type="radio" 
              name='accordion' 
              id='basic_content'
              defaultChecked
            />
            <label htmlFor="basic_content">Basic Information</label>
            <form className='content'>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Enter full name"
                  value={titleData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  value={titleData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter phone number"
                  value={titleData.phone}
                  onChange={handleChange}
                />
              </div>
            </form>
          </li>
      </ul>
  )
}

export default Tittle