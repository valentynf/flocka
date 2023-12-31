import NewMessageIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/SidebarHeader/NewMessageIcon';
import SortIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/SidebarHeader/SortIcon';
import styles from './SidebarHeader.module.css';

function SidebarHeader() {
  return (
    <div className={styles['header-container']}>
      <p className={styles['header-text']}>Flocka</p>
      <div className={styles['header-icons']}>
        <SortIcon />
        <NewMessageIcon />
      </div>
    </div>
  );
}

export default SidebarHeader;
