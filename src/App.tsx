import AppLayout from './components/AppLayout/AppLayout';
import LoginView from './components/LoginView/LoginView';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from './types/appTypes';
import useAuth from './hooks/useAuth';
import RegisterView from './components/RegisterView/RegisterView';
import AppLoadingView from './components/AppLayout/AppLoadingView/AppLoadingView';

function App() {
  const authData = useSelector((state: RootState) => state.auth);
  const isAuthenticated = authData.session !== null;
  const isExistingUser = authData.user_data !== null;
  const isUserLoggedIn = isAuthenticated && isExistingUser;

  const { isLoading } = useAuth();

  if (isLoading)
    return <AppLoadingView message="Consuming the essence of users data" />;

  return (
    <Router basename="/">
      <Routes>
        <Route
          path="/app"
          element={isUserLoggedIn ? <AppLayout /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              isExistingUser ? (
                <Navigate to="/app" />
              ) : (
                <Navigate to="/register" />
              )
            ) : (
              <LoginView />
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? <RegisterView /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
