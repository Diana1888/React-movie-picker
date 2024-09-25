import { useState } from 'react';
import Input from './Input';
import { useNavigate } from 'react-router-dom';
import { auth, app } from '../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({
  emailSignup,
  setEmailSignup,
  passwordSignup,
  setPasswordSignup
}) => {
  const [message, setMessage] = useState('');

  const handleEmailSignUp = (e) => {
    setEmailSignup(e.target.value);
  };

  const handlePasswordSignUp = (e) => {
    setPasswordSignup(e.target.value);
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const registerUser = (e) => {
    e.preventDefault();
    if (passwordSignup.length < 6) {
      setMessage('Password is too short (6 characters minimum)');
      return;
    }

    createUserWithEmailAndPassword(auth, emailSignup, passwordSignup)
      .then((userCredential) => {
        console.log(userCredential.user);
        setMessage('User created successfully! Now you can log in');
        setEmailSignup('');
        setPasswordSignup('');
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          setMessage('This email is already registered');
        } else if (error.code === 'auth/invalid-email') {
          setMessage('Incorrect email');
        } else {
          setMessage('Error creating user: ' + error.message);
        }
      });
  };

  return (
    <div className="signup">
      <p className="greeting">Welcome Back, Please register your account</p>
      <form onSubmit={registerUser}>
        <label htmlFor="email">Email</label>
        <Input
          className="input"
          name="email"
          type="email"
          placeholder=""
          value={emailSignup}
          onChange={handleEmailSignUp}
          required
        />
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder=""
          value={passwordSignup}
          onChange={handlePasswordSignUp}
          required
        />

        <div className="buttons-form sign-up-btns">
          <button className="btn-form" type="button" onClick={handleLogin}>
            Login
          </button>
          <button className="btn-form active" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default SignUp;
