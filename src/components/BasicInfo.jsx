function BasicInfo({ basicInfo, handleInputChange}) {
  return (
    <div>
      {basicInfo.map((item, index) => (
        <div key={item.id}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={item.firstName}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={item.lastName}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={item.email}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={item.phone}
              onChange={(event) => handleInputChange(index, event)}
            />
          </label>
        </div>
      ))}
    </div>
  );
};

export default BasicInfo;
