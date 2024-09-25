import { useState } from 'react';
import { auth, app } from '../firebase.config';
import { sendPasswordResetEmail } from 'firebase/auth';
import Input from './Input';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent!');
    } catch (error) {
      setMessage('Failed to send password reset email:' + error.message);
    }
  };
  return (
    <div>
      <p className="greeting">Welcome Back, Please reset your password</p>
      <form onSubmit={handleReset}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="btn-form active" type="submit">
          Reset Password
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default ResetPassword;
