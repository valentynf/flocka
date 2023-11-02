import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import styles from './MessagesHeader.module.css';

type MessagesHeaderProps = {
  type: 'public' | 'private';
  name: string;
};

function MessagesHeader({ name, type }: MessagesHeaderProps) {
  const icon =
    type == 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  return (
    <div className={styles['header-container']}>
      <div className={styles['channel-info']}>
        <div className={styles['icon']}>{icon}</div>
        <p className={styles['name']}>{name}</p>
      </div>
    </div>
  );
}

export default MessagesHeader;
