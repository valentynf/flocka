import AppLayout from './components/AppLayout/AppLayout';
import LoginView from './components/LoginView/LoginView';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { RootState } from './store/store';

function App() {
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
