import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const NavBar = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        setLoggedIn(null);
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav>
      <NavLink className="btn-form active sign-out" to={'/wishlist'}>
        Wishlist
      </NavLink>
      <NavLink
        className="btn-form active sign-out"
        to={'/'}
        onClick={handleSignOut}
      >
        Sign Out
      </NavLink>
    </nav>
  );
};

export default NavBar;
