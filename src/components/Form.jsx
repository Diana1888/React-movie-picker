import movie from '../assets/movie.jpg'
import logo from '../assets/logo.png'
import SignUp from './SignUp';
import Login from './Login';
import { useState } from 'react';

const Form = ({ isSignUp, isLogin}) => {
  


  return(
    <div className="container">
      <div className='form'>
        <div className='header'>
        <img className='logo' src={logo} alt="" />
        <h1 className='header-name'>Movie Picker</h1>
        </div>
        <p className='subtitle'>Artificial Intelligence giving you movie recommendations</p>
        {isLogin ? <Login /> : (isSignUp ? <SignUp /> : <SignUp />)}
    
      </div>
      <div className='img-container'>
        <img className='main-img' src={movie} alt="" />
      </div>
      
    </div>
  )
}

export default Form;