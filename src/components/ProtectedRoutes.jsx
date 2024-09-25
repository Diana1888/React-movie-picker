import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/authContext';
import { useContext } from 'react';

const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
