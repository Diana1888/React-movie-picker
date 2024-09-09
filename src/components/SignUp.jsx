import { useState } from "react";
import Input from "./Input";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignUp = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordSignUp = (e) => {
    setPassword(e.target.value);
  }

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login")
  }


  return(
     <div className="signup">
        <p className='greeting'>Welcome Back, Please register your account</p>

<label htmlFor="email">Email</label>
        <Input className='input'
        name='email'
        type='text'
        placeholder=''
        value={email}
        onChange={handleEmailSignUp}
        required
        />
        <label htmlFor="password">Password</label>
        <Input 
        name='password'
        type='password'
        placeholder=''
        value={password}
        onChange={handlePasswordSignUp}
        required
        />
        
        <div className="buttons-form">
          <button className="btn-form" onClick={handleLogin}>Login</button>
          <button className="btn-form active">Sign Up</button>

        </div>
     
    </div>

  )
}

export default SignUp;