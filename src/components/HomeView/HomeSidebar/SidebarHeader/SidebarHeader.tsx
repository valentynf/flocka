import SidebarNewMessageIcon from '../../../../icons/HomeView/HomeSidebar/SidebarHeader/SidebarNewMessageIcon';
import SidebarSortIcon from '../../../../icons/HomeView/HomeSidebar/SidebarHeader/SidebarSortIcon';
import styles from './SidebarHeader.module.css';

function SidebarHeader() {
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

export default SidebarHeader;
