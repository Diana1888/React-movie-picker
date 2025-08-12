import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.config';
import { useContext } from 'react';
import AuthContext from '../context/authContext';

const NavBar = () => {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

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

  const showBackButton = location.pathname !== '/list';

  return (
    <nav className="navbar">
      {showBackButton && (
        <button
          className="btn-form active navlink backBtn"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      )}
      <NavLink className="btn-form active navlink" to={'/wishlist'}>
        Wishlist
      </NavLink>
      <NavLink
        className="btn-form active navlink"
        to={'/'}
        onClick={handleSignOut}
      >
        Sign Out
      </NavLink>
    </nav>
  );
};

export default NavBar;
