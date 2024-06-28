// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = "'/board'",
}) {
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  return (
    <>
      <div>{Component}</div>
    </>
  );
}
