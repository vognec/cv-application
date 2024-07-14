function BasicInfo({ basicInfo, onChange}) {
  return (
    <div>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={basicInfo.firstName}
              onChange={onChange}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={basicInfo.lastName}
              onChange={onChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={basicInfo.email}
              onChange={onChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={basicInfo.phone}
              onChange={onChange}
            />
          </label> 
    </div>
  );
};

export default BasicInfo;
