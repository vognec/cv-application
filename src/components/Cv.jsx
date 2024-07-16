function Cv({basicInfo, jobInfo, eduInfo}) {
  return (

      
        <div className="cv-container">
          <div className="cv-left-container">
            <p className="cv-name">{basicInfo.firstName} {basicInfo.lastName}</p>
            <hr />
            <div className="cv-contact">
              <p className="cv-email">{basicInfo.email}</p>
              <p className="cv-phone">{basicInfo.phone}</p>
            </div>
          </div>
            
            <div className="cv-right-container">
              <h2>Experience</h2>
              <hr />
              {jobInfo.map( item => (
                <div key={item.id}>
                    <div className="display-wrapper">
                      <p className="item-name">{item.jobName}</p>
                      <p className="item-title">{item.jobTitle}</p>
                      <p className="item-duties">{item.jobDuties}</p>
                      <p className="item-date">{item.jobStartDate} - {item.jobEndDate}</p>
                    </div>
                </div>
                )
              )}
              <h2>Education</h2>
              <hr />
              {eduInfo.map( item =>(
                <div className="display-wrapper">
                  <div key={item.id}>
                      <p className="item-name">{item.eduName}</p>
                      <p className="item-title">{item.eduDegree}</p>
                      <p>{item.eduGPA}</p>
                      <p className="item-date">{item.eduStartDate} - {item.eduEndDate}</p>
                     
                  </div>
                </div>
              )
              )}
            </div>
          
        </div>

  );
};

export default Cv;
