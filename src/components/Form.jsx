import movie from '../assets/movie.jpg';
import logo from '../assets/logo.png';
import SignUp from './SignUp';
import Login from './Login';
import ResetPassword from './ResetPassword';
import { useState } from 'react';

const Form = ({ formType }) => {
  const [emailSignup, setEmailSignup] = useState('');
  const [passwordSignup, setPasswordSignup] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  return (
    <div className="container">
      <div className="wrapper">
        <div className="form">
          <div className="header">
            <img className="logo" src={logo} alt="" />
            <h1 className="header-name">Movie Picker</h1>
          </div>
          <p className="subtitle">
            Artificial Intelligence giving you movie recommendations
          </p>
          {formType === 'login' && (
            <Login
              emailLogin={emailLogin}
              setEmailLogin={setEmailLogin}
              passwordLogin={passwordLogin}
              setPasswordLogin={setPasswordLogin}
            />
          )}
          {formType === 'signup' && (
            <SignUp
              emailSignup={emailSignup}
              setEmailSignup={setEmailSignup}
              passwordSignup={passwordSignup}
              setPasswordSignup={setPasswordSignup}
            />
          )}
          {formType === 'resetPassword' && <ResetPassword />}
        </div>
        <div className="img-container">
          <img className="main-img" src={movie} alt="image-background" />
        </div>
      </div>
    </div>
  );
};

export default Form;
