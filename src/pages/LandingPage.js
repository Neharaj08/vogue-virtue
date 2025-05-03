import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay"></div>
      <div className="landing-content">
        <h1 className="landing-page-header">Discover Your Perfect Outfit!</h1>
        <p className="landing-page-description">
          AI-Powered Outfit Recommendations Just for You
        </p>
        <div className="landing-page-buttons">
          <button onClick={() => navigate('/signup')}>Sign Up</button>
          <button onClick={() => navigate('/signin')}>Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
