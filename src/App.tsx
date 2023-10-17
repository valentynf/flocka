import HomeView from './components/HomeView/HomeView';
import styles from './App.module.css';
import AppSidebar from './components/AppSidebar/AppSidebar';
import AppTopBar from './components/AppTopbar/AppTopbar';

function App() {
  return (
    <div className={styles['main-view']}>
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
  );
}

export default App;
