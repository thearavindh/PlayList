import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const sendOtp = async () => {
    await axios.post('http://localhost:5000/api/auth/send-otp', { email });
    setStep(2);
  };

  const verifyOtp = async () => {
    const res = await axios.post('http://localhost:5000/api/auth/verify-otp', { email, otp });
    localStorage.setItem('token', res.data.token);
    alert('Login Successful');
  };

  return (
    <div>
      {step === 1 ? (
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input type="text" placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default Login;
