import PortalIcon from './PortalIcon';
import styles from './PortalLogo.module.css';
import SwirlIcon from './SwirlIcon/SwirlIcon';

function PortalLogo() {
  return (
    <div className={styles['portal-logo']}>
      <div className={styles['portal-icon']}>
        <PortalIcon />
      </div>
      <div className={styles['swirl-icon']}>
        <SwirlIcon />
      </div>
    </div>
  );
}

export default PortalLogo;
