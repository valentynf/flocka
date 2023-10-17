import GreenCircleOnlineIcon from '../../../../../icons/HomeView/HomeSidebar/CollapsibleList/AvatarWithStatus/GreenCircleOnlineIcon';
import WhiteCircleOfflineButton from '../../../../../icons/HomeView/HomeSidebar/CollapsibleList/AvatarWithStatus/WhiteCircleOfflineIcon';
import styles from './AvatarWithStatus.module.css';

type AvatarWithStatusPropsType = {
  status: 'online' | 'offline';
  backgroundColor: string;
};

function AvatarWithStatus({
  status,
  backgroundColor,
}: AvatarWithStatusPropsType) {
  return (
    <div className={styles['avatar-container']}>
      <img
        src={'src/assets/images/user-image.jpeg'}
        className={styles['avatar-image']}
      />
      <div className={styles['status-icon']}>
        {status === 'online' && (
          <GreenCircleOnlineIcon backgroundColor={backgroundColor} />
        )}
        {status === 'offline' && (
          <WhiteCircleOfflineButton backgroundColor={backgroundColor} />
        )}
      </div>
    </div>
  );
}

export default AvatarWithStatus;
