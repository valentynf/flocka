import useUser from '../../../hooks/useUser';
import ArrowLeft from '../../../icons/AppLayout/AppTopbar/ArrowLeft';
import ArrowRight from '../../../icons/AppLayout/AppTopbar/ArrowRight';
import ClockIcon from '../../../icons/AppLayout/AppTopbar/ClockIcon';
import LogoutIcon from '../../../icons/AppLayout/AppTopbar/LogoutIcon';
import MagGlassIcon from '../../../icons/AppLayout/AppTopbar/MagGlassIcon';
import styles from './AppTopBar.module.css';

function AppTopBar() {
  const { logout } = useUser();

  return (
    <div className={styles['top-bar']}>
      <div className={styles['main']}>
        <div className={styles['icon']}>
          <ArrowLeft />
        </div>
        <div className={styles['icon']}>
          <ArrowRight />
        </div>
        <div className={styles['icon']}>
          <ClockIcon />
        </div>
        <div className={styles['search-bar']}>
          <MagGlassIcon />
          <p className={styles['search-placeholder']}>Search Dunder Mifflin</p>
        </div>
      </div>
      <div className={styles['help']}>
        <div onClick={logout} className={styles['icon']}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}

export default AppTopBar;
