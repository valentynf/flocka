import ArrowLeft from '../../icons/AppTopbar/ArrowLeft';
import ArrowRight from '../../icons/AppTopbar/ArrowRight';
import ClockIcon from '../../icons/AppTopbar/ClockIcon';
import HelpIcon from '../../icons/AppTopbar/HelpIcon';
import MagGlassIcon from '../../icons/AppTopbar/MagGlassIcon';
import styles from './AppTopBar.module.css';

function AppTopBar() {
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
        <div className={styles['icon']}>
          <HelpIcon />
        </div>
      </div>
    </div>
  );
}

export default AppTopBar;
