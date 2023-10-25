import styles from './MessagesHeader.module.css';
import UserImageWithStatusMedium from './UserImageWithStatusMedium/UserImageWithStatusMedium';

function MessagesHeader() {
  return (
    <div className={styles['header-container']}>
      <div className={styles['channel-info']}>
        <div className={styles['icon']}>
          <UserImageWithStatusMedium status="online" />
        </div>
        <p className={styles['name']}>Dwight Schrute</p>
      </div>
    </div>
  );
}

export default MessagesHeader;
