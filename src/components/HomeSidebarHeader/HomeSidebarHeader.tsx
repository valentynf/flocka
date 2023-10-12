import SidebarNewMessageIcon from '../../icons/HomeSidebarHeader/SidebarNewMessageIcon';
import SidebarSortIcon from '../../icons/HomeSidebarHeader/SidebarSortIcon';
import styles from './HomeSidebarHeader.module.css';

function HomeSidebarHeader() {
  return (
    <div className={styles['header-container']}>
      <p className={styles['header-text']}>Dunder Mifflin</p>
      <div className={styles['header-icons']}>
        <SidebarSortIcon />
        <SidebarNewMessageIcon />
      </div>
    </div>
  );
}

export default HomeSidebarHeader;
