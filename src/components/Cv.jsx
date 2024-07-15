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
              {jobInfo.map( item => (
                <div key={item.id}>
                    <p>{item.jobName}</p>
                    <p>{item.jobTitle}</p>
                    <p>{item.jobDuties}</p>
                    <p>{item.jobStartDate}</p>
                    <p>{item.jobEndDate}</p>
                </div>
                )
              )}
              {eduInfo.map( item =>(
                <div key={item.id}>
                    <p>{item.eduName}</p>
                    <p>{item.eduDegree}</p>
                    <p>{item.eduGPA}</p>
                    <p>{item.eduStartDate}</p>
                    <p>{item.eduEndDate}</p>
                </div>
              )
              )}
            </div>
          
        </div>

  );
};

export default Cv;
