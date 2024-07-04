import '../styles/title.css'

function Tittle(){
    return (
      <div className='container'>
        <div>
          <p className='basic-title'>Basic Information</p>
          <form >
            <div className='input-wrapper'>
              <div className='label-wrapper'><label htmlFor="name">Name</label></div>
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Enter full name"
              />
            </div>
            <div className='input-wrapper'>
              <div className="label-wrapper"><label htmlFor="email">Email</label></div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className='input-wrapper'>
              <div className="label-wrapper"><label htmlFor="phone">Phone</label></div>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter phone number"
              />
            </div>
          </form>
        </div>
      </div>
    )
}

export default Tittle