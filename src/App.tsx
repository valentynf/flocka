import HomeView from './components/HomeView/HomeView';
import styles from './App.module.css';
import AppSidebar from './components/AppSidebar/AppSidebar';
import AppTopBar from './components/AppTopbar/AppTopbar';
import LoginView from './components/LoginView/LoginView';
import useUser from './hooks/useUser';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

function App() {
  const { user_data } = useUser();

  return (
    <Router>
      <div className={styles['main-view']}>
        <Routes>
          <Route
            path="/login"
            element={
              Object.keys(user_data).length === 0 ? (
                <LoginView />
              ) : (
                <Navigate to="/app" />
              )
            }
          />
          <Route
            path="/app"
            element={
              Object.keys(user_data).length === 0 ? (
                <Navigate to="/login" />
              ) : (
                <div>
                  <div className={styles['main-topbar']}>
                    <AppTopBar />
                  </div>
                  <div className={styles['main-container']}>
                    <div className={styles['main-sidebar']}>
                      <AppSidebar />
                    </div>
                    <div className={styles['main-content']}>
                      <HomeView />
                    </div>
                  </div>
                </div>
              )
            }
          />
          <Route path="/*" element={<Navigate to="/app" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
