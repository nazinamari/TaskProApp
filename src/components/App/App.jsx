import { Navigate, Route, Routes } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage';
import BoardPage from '../../pages/BoardPage';
import HomePage from '../../pages/HomePage';
import WelcomePage from '../../pages/WelcomePage';
import Layout from '../Layout/Layout';
import LoginForm from '../LoginForm/LoginForm';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import RegisterForm from '../RegisterForm/RegisterForm';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route
          path="/welcome"
          element={
            <RestrictedRoute component={<WelcomePage />} redirectTo="/home" />
          }
        />
        <Route path="/auth" element={<AuthPage />}>
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<RegisterForm />}
                redirectTo="/home"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<LoginForm />} redirectTo="/home" />
            }
          />
        </Route>
        <Route path="home" element={<PrivateRoute component={<Layout />} />}>
          <Route index element={<HomePage />} />
          <Route path=":boardId" element={<BoardPage />} />
        </Route>
      </Routes>
    </>
  );
}
