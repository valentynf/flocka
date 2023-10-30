import AppLayout from './components/AppLayout/AppLayout';
import LoginView from './components/LoginView/LoginView';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuthListener from './hooks/useAuthListener';
import { RootState } from './types/appTypes';

function App() {
  useAuthListener();
  const session = useSelector((state: RootState) => state.auth.session);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={session === null ? <LoginView /> : <Navigate to="/app" />}
        />
        <Route
          path="/app"
          element={session === null ? <Navigate to="/login" /> : <AppLayout />}
        />
        <Route path="/*" element={<Navigate to="/app" />} />
      </Routes>
    </Router>
  );
}

export default App;
