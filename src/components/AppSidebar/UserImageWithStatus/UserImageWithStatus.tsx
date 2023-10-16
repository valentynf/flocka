import OfflineIcon from '../../../icons/AppSidebar/UserImageWithStatus/OfflineIcon';
import OnlineIcon from '../../../icons/AppSidebar/UserImageWithStatus/OnlineIcon';
import styles from './UserImageWithStatus.module.css';

type UserImageWithStatusPropsType = {
  status: 'online' | 'offline';
};

function UserImageWithStatus({ status }: UserImageWithStatusPropsType) {
  return (
    <div className={styles['user-image']}>
      <img
        src={'src/assets/images/user-image.jpeg'}
        className={styles['avatar-image']}
      />
      <div className={styles['status-icon']}>
        {status === 'online' && <OnlineIcon />}
        {status === 'offline' && <OfflineIcon />}
      </div>
    </div>
  );
}

export default UserImageWithStatus;
