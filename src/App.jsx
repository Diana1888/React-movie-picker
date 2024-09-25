import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import { AuthProvider } from './context/authContext';
import MovieList from './components/MovieList';
import MovieListItem from './components/MovieItem';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Form formType="login" />} />
          <Route path="/signup" element={<Form formType="signup" />} />
          <Route path="/login" element={<Form formType="login" />} />
          <Route path="/reset" element={<Form formType="resetPassword" />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/list" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieListItem />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
