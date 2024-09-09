
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Form from './components/Form';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {

  return <Routes>
    <Route path='/' element={<Form isLogin/>}/>
    <Route path='/signup' element={<Form isSignUp />}/>
    <Route path='/login' element={<Form isLogin/>}/>
  </Routes>
}

export default App
