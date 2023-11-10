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
import RegisterView from './components/LoginView/RegisterView/RegisterView';

function App() {
  const authData = useSelector((state: RootState) => state.auth);

  useAuth();

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            authData.session === null || authData.isLoading ? (
              <LoginView />
            ) : authData.user_data === null ? (
              <RegisterView />
            ) : (
              <Navigate to="/app" />
            )
          }
        />
        <Route
          path="/app"
          element={
            authData.user_data !== null && authData.session !== null ? (
              <AppLayout />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
