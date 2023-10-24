import OfflineIconSmall from '../../../../../../icons/HomeView/HomeSidebar/CollapsibleList/UserImageWithStatusSmall/OfflineIconSmall';
import OnlineIconSmall from '../../../../../../icons/HomeView/HomeSidebar/CollapsibleList/UserImageWithStatusSmall/OnlineIconSmall';
import styles from './UserImageWithStatusSmall.module.css';

type UserImageWithStatusSmallPropsType = {
  status: 'online' | 'offline';
};

function UserImageWithStatusSmall({
  status,
}: UserImageWithStatusSmallPropsType) {
  return (
    <div className={styles['avatar-container']}>
      <img
        src={'src/assets/images/user-image.jpeg'}
        className={styles['avatar-image']}
      />
      <div className={styles['status-icon']}>
        {status === 'online' && <OnlineIconSmall />}
        {status === 'offline' && <OfflineIconSmall />}
      </div>
    </div>
  );
}

export default UserImageWithStatusSmall;
