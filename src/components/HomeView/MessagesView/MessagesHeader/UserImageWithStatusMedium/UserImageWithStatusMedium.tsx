import OfflineIconMedium from '../../../../../icons/HomeView/MessagesView/MessagesHeader/UserImageWithStatusMedium/OfflineIconMedium';
import OnlineIconMedium from '../../../../../icons/HomeView/MessagesView/MessagesHeader/UserImageWithStatusMedium/OnlineIconMedium';
import styles from './UserImageWithStatusMedium.module.css';

type UserImageWithStatusMediumPropsType = {
  status: 'online' | 'offline';
};

function UserImageWithStatusMedium({
  status,
}: UserImageWithStatusMediumPropsType) {
  return (
    <div className={styles['avatar-container']}>
      <img
        src={'src/assets/images/user-image.jpeg'}
        className={styles['avatar-image']}
      />
      <div className={styles['status-icon']}>
        {status === 'online' && <OnlineIconMedium />}
        {status === 'offline' && <OfflineIconMedium />}
      </div>
    </div>
  );
}

export default UserImageWithStatusMedium;
