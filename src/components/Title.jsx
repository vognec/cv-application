import '../styles/title.css'

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
      <div className='container'>
        <div>
          <p className='basic-title'>Basic Information</p>
          <form >
            <div className='input-wrapper'>
              <div className='label-wrapper'><label className='label-text' htmlFor="name">Name</label></div>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter full name"
                value={titleData.name}
                onChange={handleChange}
              />
            </div>
            <div className='input-wrapper'>
              <div className="label-wrapper"><label className='label-text' htmlFor="email">Email</label></div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                value={titleData.email}
                onChange={handleChange}
              />
            </div>
            <div className='input-wrapper'>
              <div className="label-wrapper"><label className='label-text' htmlFor="phone">Phone</label></div>
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
        </div>
      </div>
    )
}

export default Tittle