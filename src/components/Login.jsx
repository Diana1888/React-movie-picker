import { Link, useNavigate } from 'react-router-dom';
import Input from './Input';
import { useContext, useEffect, useState } from 'react';
import { auth, app } from '../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthContext from '../context/authContext';

const Login = ({
  emailLogin,
  setEmailLogin,
  passwordLogin,
  setPasswordLogin
}) => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [rememberPass, setRememberPass] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');
    if (storedEmail && storedPassword) {
      setEmailLogin(storedEmail);
      setPasswordLogin(storedPassword);
      setRememberPass(true);
    }
  }, []);

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        setIsLoggedIn(userCredential.user);

        if (rememberPass) {
          localStorage.setItem('email', emailLogin);
          localStorage.setItem('password', passwordLogin);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }
        navigate('/list');
      })
      .catch((error) => {
        console.log(error);
        if (error.code === 'auth/invalid-credential') {
          setMessage('Invalid credential. Please try again.');
        } else {
          setMessage('Unknown error' + error.message);
        }
      });
  };

  const handleEmailLogin = (e) => {
    setEmailLogin(e.target.value);
  };

  const handlePasswordLogin = (e) => {
    setPasswordLogin(e.target.value);
  };

  const handleCheckbox = () => {
    setRememberPass(!rememberPass);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div className="login">
      <p className="greeting">Welcome Back, Please login to your account</p>
      <form onSubmit={signInUser}>
        <label htmlFor="email">Email</label>

        <Input
          className="input-text"
          name="email"
          type="email"
          placeholder=""
          value={emailLogin}
          onChange={handleEmailLogin}
          required
        />
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          type="password"
          placeholder=""
          value={passwordLogin}
          onChange={handlePasswordLogin}
          required
        />

        <div className="form-check">
          <label className="remembered">
            <Input
              name="remembered"
              type="checkbox"
              checked={rememberPass}
              onChange={handleCheckbox}
            />
            Remember me
          </label>

          <Link to={'/reset'} className="forgotten">
            Forgot password?
          </Link>
        </div>

        <div className="buttons-form">
          <button className="btn-form active" type="submit">
            Login
          </button>
          <button className="btn-form" onClick={handleSignUp} type="button">
            Sign Up
          </button>
        </div>
      </form>
      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Login;
