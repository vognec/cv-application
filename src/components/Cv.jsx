function Cv({basicInfo, jobInfo, eduInfo}) {
  return (

      
        <div >
          <p>First Name: {basicInfo.firstName}</p>
          <p>Last Name: {basicInfo.lastName}</p>
          <p>Email: {basicInfo.email}</p>
          <p>Phone: {basicInfo.phone}</p>
          <hr />
          {jobInfo.map( item => (
            <div key={item.id}>
                <p>Job Name: {item.jobName}</p>
                <p>Job Title: {item.jobTitle}</p>
                <p>Job Duties: {item.jobDuties}</p>
                <p>Job Start Date: {item.jobStartDate}</p>
                <p>Job End Date: {item.jobEndDate}</p>
            </div>
            )
          )}
          <hr />
          {eduInfo.map( item =>(
            <div key={item.id}>
                <p>School Name: {item.eduName}</p>
                <p>Degree: {item.eduDegree}</p>
                <p>GPA: {item.eduGPA}</p>
                <p>Start Date: {item.eduStartDate}</p>
                <p>End Date: {item.eduEndDate}</p>
            </div>
          ) 
          )}
        </div>

  );
};

export default Cv;
