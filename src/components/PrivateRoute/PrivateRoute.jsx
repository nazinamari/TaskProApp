// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ component: Component }) {
  // const isLoggenIn = useSelector(selectIsLoggedIn);

  // return isLoggenIn ? Component : <Navigate to={'/login'} />;
  return (
    <>
      <div>{Component}</div>
    </>
  );
}
