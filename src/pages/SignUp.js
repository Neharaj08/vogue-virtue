import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError(""); 

      
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      navigate("/signin"); 
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Register</button>
    </div>
  );
};

export default SignUp;
