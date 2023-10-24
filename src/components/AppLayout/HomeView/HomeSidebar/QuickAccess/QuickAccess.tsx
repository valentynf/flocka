import DraftSentIcon from '../../../../../icons/HomeView/HomeSidebar/QuickAccess/DraftSentIcon';
import ThreadsIcon from '../../../../../icons/HomeView/HomeSidebar/QuickAccess/ThreadsIcon';
import UnreadMessagesIcon from '../../../../../icons/HomeView/HomeSidebar/QuickAccess/UnreadMessagesIcon';
import styles from './QuickAccess.module.css';

function QuickAccess() {
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
        <DraftSentIcon fill="none" strokeColor="#c4c4c7" />
        <p className={styles['quick-action-name']}>Drafts & sent</p>
      </li>
    </ul>
  );
}

export default QuickAccess;
