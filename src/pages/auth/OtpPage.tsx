import React, { FormEvent, useContext, useRef } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import './OtpPage.css'; // Import the CSS file

function OtpPage() {
  const { user, updateUserInformation } = useContext(UserContext);
  const otp = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const url = "https://kaseapp1dev.kasegro.com/api/r1/register";

    try {
      const data = {
        ...user,
        verified_code: otp.current?.value,
        auth_type: 'phone',
        device_type: 'web'
      };

      console.log(data);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
       if(response.status !== 201){
        alert('Error')
       }
      const body = await response.json();
      console.log('API Response:',body);
      localStorage.setItem("isAuthenticated",'true')
      navigate("/home")
      // Assuming the API response has a success flag or status field
      // if ( body.status === 'true') {
      //   // Update user information if needed
      //   updateUserInformation({ ...user, isVerified: true });

      //   // Navigate to the home page on successful OTP verification
      //   localStorage.setItem("isOtpVerified", "true");
      //   navigate('/home');
      // } else {
      //   // Handle error - display a message, log the issue, etc.
      //   console.error('OTP verification failed:', body.message || 'Unknown error');
      //   alert(body.message || 'OTP verification failed. Please try again.');
      // }
     

    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  const maskedPhoneNumber = user?.phone
    ? `${user.phone.slice(0, 4)}*******${user.phone.slice(-2)}`
    : '';
    if(localStorage.getItem("otpFlag")!=='true'){

     return  <Navigate to='/register' replace/>
    
     
    }
    if(localStorage.getItem("isAuthenticated")==='true'){
      console.log('12345')
     return  <Navigate to='/home' replace/>
    
     
    }

  return (
    <div className="otp-page">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">OTP Verification</h1>
          <h2 className="text-center">
            Enter OTP Code sent to {maskedPhoneNumber}
          </h2>
          <input
            className='flex justify-center align-center'
            placeholder="OTP"
            ref={otp}
            type="text"
            maxLength={6}
          />
          <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginTop: '1rem' // Adds space between the input and the button
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#007bff')}
        
          >Submit</button>
        </form>
      </div>
    </div>
  );
}

export default OtpPage;
