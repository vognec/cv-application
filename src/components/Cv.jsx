import React from 'react';

function Cv({basicInfo}) {
  return (
    <div>
      {basicInfo.map((item) => (
        <div key={item.id}>
          <p>First Name: {item.firstName}</p>
          <p>Last Name: {item.lastName}</p>
          <p>Email: {item.email}</p>
          <p>Phone: {item.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Cv;
