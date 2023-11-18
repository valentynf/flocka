import PrivateChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PrivateChannelIcon';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import styles from './ConvoHeader.module.css';

type ConvoHeaderProps = {
  type: 'public' | 'private';
  name: string;
};

function ConvoHeader({ name, type }: ConvoHeaderProps) {
  const icon =
    type === 'public' ? <PublicChannelIcon /> : <PrivateChannelIcon />;

  return (
    <div className={styles['header-container']}>
      <div className={styles['channel-info']}>
        <div className={styles['icon']}>{icon}</div>
        <p className={styles['name']}>{name}</p>
      </div>
      <div></div>
    </div>
  );
}

export default ConvoHeader;
