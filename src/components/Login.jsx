import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPass, setRememberPass] = useState(false);

  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordLogin = (e) => {
    setPassword(e.target.value);
  }

  const handleCheckbox = () => {
    setRememberPass(!rememberPass);
  }

  const handleSignUp =() => {
    navigate("/signup")
  }

  return(
    <div className="login">
        <p className='greeting'>Welcome Back, Please login to your account</p>
        <label htmlFor="email" >Email</label>
        <Input className="input-text"
        name='email'
        type='text'
        placeholder=''
        value={email}
        onChange={handleEmailLogin}
        required
        />
        <label htmlFor="password">Password</label>
        <Input 
        name='password'
        type='password'
        placeholder=''
        value={password}
        onChange={handlePasswordLogin}
        required
        />

        <div className="form-check">
        <label className="remembered">
          <Input name="remembered"
              type="checkbox"
              checked={rememberPass}
              onChange={handleCheckbox} />
          
            Remember me
          </label>

<button className="forgotten">Forgot password?</button>
        </div>

        
        <div className="buttons-form">
          <button className="btn-form active">Login</button>
          <button className="btn-form" onClick={handleSignUp}>Sign Up</button>

        </div>
     
    </div>
  )
}

export default Login;