import GreenCircleOnlineIcon from './AvatarWithStatusIcons/GreenCircleOnlineIcon';
import WhiteCircleOfflineButton from './AvatarWithStatusIcons/WhiteCircleOfflineIcon';
import styles from './AvatarWithStatus.module.css';

type AvatarWithStatusPropsType = {
  status: 'online' | 'offline';
};

function AvatarWithStatus({ status }: AvatarWithStatusPropsType) {
  return (
    <div className={styles['avatar-container']}>
      <img
        src={'src/assets/images/user-image.jpeg'}
        className={styles['avatar-image']}
      />
      <div className={styles['status-icon']}>
        {status === 'online' && <GreenCircleOnlineIcon />}
        {status === 'offline' && <WhiteCircleOfflineButton />}
      </div>
    </div>
  );
}

export default AvatarWithStatus;
