import DraftSentIcon from '../../icons/HomeSidebarQuickAccess/DraftSentIcon';
import ThreadsIcon from '../../icons/HomeSidebarQuickAccess/ThreadsIcon';
import UnreadMessagesIcon from '../../icons/HomeSidebarQuickAccess/UnreadMessagesIcon';
import styles from './HomeSidebarQuickAccess.module.css';

function HomeSideBarQuickAccess() {
  return (
    <ul className={styles['quick-actions-list']}>
      <li className={styles['quick-action-item']}>
        <UnreadMessagesIcon />
        <p className={styles['quick-action-name']}>Unreads</p>
      </li>
      <li className={styles['quick-action-item']}>
        <ThreadsIcon />
        <p className={styles['quick-action-name']}>Threads</p>
      </li>
      <li className={styles['quick-action-item']}>
        <DraftSentIcon />
        <p className={styles['quick-action-name']}>Drafts & sent</p>
      </li>
    </ul>
  );
}

export default HomeSideBarQuickAccess;
