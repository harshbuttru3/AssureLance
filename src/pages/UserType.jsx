import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./userType.css";

function UserType() {
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const handleUserTypeSelection = (type) => {
    setUserType(type);
  };

  const handleProceed = () => {
    if (userType) {
      // Store userType in localStorage or pass it through state during navigation
      navigate("/signup", { state: { userType } });
    } else {
      alert("Please select whether you are a Freelancer or Client.");
    }
  };

  return (
    <>
      <h2>You are a</h2>
      <div className='container'>
        <button className="freelancer" onClick={() => handleUserTypeSelection("Freelancer")}>Freelancer</button>
        <button className="client" onClick={() => handleUserTypeSelection("Client")}>Client</button>
      </div>
      <button onClick={handleProceed} className="proceed-link">
        Proceed to Signup
      </button>
    </>
  );
}

export default UserType;
