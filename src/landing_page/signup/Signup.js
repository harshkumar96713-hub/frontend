import React from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {

  const handleSignup = (e) => {
    e.preventDefault();
  
    window.location.href = "https://dashboard-1-qqkf.onrender.com/";
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
