import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/authContext';
import movieLoader from '../assets/movieLoader.gif';
import { useContext } from 'react';
import NavBar from './NavBar';

const ProtectedRoutes = () => {
  const { isLoggedIn, loading } = useContext(AuthContext);

  if (loading) {
    return <img src={movieLoader} alt="Loading..." />;
  }

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="layout">
      <NavBar />
      <main>
        <Outlet className="page-container" />
      </main>
    </div>
  );
};

export default ProtectedRoutes;
