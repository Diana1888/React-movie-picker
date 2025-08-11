import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import { AuthProvider } from './context/authContext';
import MovieList from './components/MovieList';
import MovieListItem from './components/MovieItem';
import ProtectedRoutes from './components/ProtectedRoutes';
import WishList from './components/WishList';
import { WishlistProvider } from './context/WishlistContext';

function App() {
  return (
    <>
      <AuthProvider>
        <WishlistProvider>
          <Routes>
            <Route path="/" element={<Form formType="login" />} />
            <Route path="/signup" element={<Form formType="signup" />} />
            <Route path="/login" element={<Form formType="login" />} />
            <Route path="/reset" element={<Form formType="resetPassword" />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/list" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieListItem />} />
              <Route path="/wishlist" element={<WishList />} />
            </Route>
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </WishlistProvider>
      </AuthProvider>
    </>
  );
}

export default App;
