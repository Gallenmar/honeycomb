import { useState } from "react"

function ProfileDetails({ onContinue }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    phone: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className="screen profile-details">
      <div className="header">
        <button className="back-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#FF7A59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="content">
        <h1 className="title">Profile Details</h1>
        <p className="subtitle">Fill up the following details</p>

        <div className="avatar-container">
          <div className="avatar">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 20C24.1421 20 27.5 16.6421 27.5 12.5C27.5 8.35786 24.1421 5 20 5C15.8579 5 12.5 8.35786 12.5 12.5C12.5 16.6421 15.8579 20 20 20Z"
                stroke="#FF7A59"
                strokeWidth="2"
              />
              <path
                d="M30 35C30 30.0294 25.5228 26 20 26C14.4772 26 10 30.0294 10 35"
                stroke="#FF7A59"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="avatar-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#FF7A59" />
              <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <form className="profile-form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Matthew"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>DOB</label>
            <input type="text" name="dob" placeholder="DD/MM/YYYY" value={formData.dob} onChange={handleChange} />
            <span className="calendar-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.6667 3.33334H3.33333C2.41286 3.33334 1.66667 4.07953 1.66667 5.00001V16.6667C1.66667 17.5872 2.41286 18.3333 3.33333 18.3333H16.6667C17.5872 18.3333 18.3333 17.5872 18.3333 16.6667V5.00001C18.3333 4.07953 17.5872 3.33334 16.6667 3.33334Z"
                  stroke="#CCCCCC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66667 1.66666V4.99999"
                  stroke="#CCCCCC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 1.66666V4.99999"
                  stroke="#CCCCCC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.66667 8.33334H18.3333"
                  stroke="#CCCCCC"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>

          <div className="form-group">
            <label>Phone number</label>
            <input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
          </div>
        </form>
      </div>

      <div className="footer">
        <button className="continue-button" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default ProfileDetails
