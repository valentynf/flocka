import OfflineIconBig from '../../../../icons/AppLayout/AppSidebar/UserImageWithStatusBig/OfflineIconBig';
import OnlineIconBig from '../../../../icons/AppLayout/AppSidebar/UserImageWithStatusBig/OnlineIconBig';
import styles from './UserImageWithStatusBig.module.css';

type UserImageWithStatusBigProps = {
  status: 'online' | 'offline';
};

function UserImageWithStatusBig({ status }: UserImageWithStatusBigProps) {
  return (
    <div className={styles['user-image']}>
      <img
        src={'src/assets/images/user-image.jpeg'}
        className={styles['avatar-image']}
      />
      <div className={styles['status-icon']}>
        {status === 'online' && <OnlineIconBig />}
        {status === 'offline' && <OfflineIconBig />}
      </div>
    </div>
  );
}

export default UserImageWithStatusBig;
