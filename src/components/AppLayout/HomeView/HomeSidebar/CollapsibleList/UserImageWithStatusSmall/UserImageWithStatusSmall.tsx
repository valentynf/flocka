import OfflineIconSmall from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/UserImageWithStatusSmall/OfflineIconSmall';
import OnlineIconSmall from '../../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/UserImageWithStatusSmall/OnlineIconSmall';
import styles from './UserImageWithStatusSmall.module.css';

type UserImageWithStatusSmallProps = {
  status: 'online' | 'offline';
};

function UserImageWithStatusSmall({ status }: UserImageWithStatusSmallProps) {
  return (
    <div className={styles['avatar-container']}>
      <img src={'/images/user-image.jpeg'} className={styles['avatar-image']} />
      <div className={styles['status-icon']}>
        {status === 'online' && <OnlineIconSmall />}
        {status === 'offline' && <OfflineIconSmall />}
      </div>
    </div>
  );
}

export default UserImageWithStatusSmall;
