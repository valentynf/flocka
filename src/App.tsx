import HomeView from './components/HomeView/HomeView';
import styles from './App.module.css';
import AppSidebar from './components/AppSidebar/AppSidebar';

// function App() {
//   return (
//     <div className={styles['main-view']}>
//       <div className={styles['main-topbar']}></div>
//       <div className={styles['main-container']}>
//         <div className={styles['main-sidebar']}></div>
//         <div className={styles['main-content']}>
//           <HomeView />
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {
  return <AppSidebar />;
}

export default App;
