import HomeSidebar from './HomeSidebar/HomeSidebar';
import styles from './HomeView.module.css';
import useChannels from '../../../hooks/useChannels';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/appTypes';
import ConversationView from './ConversationView/ConversationView';

function HomeView() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );
  useChannels();

  return (
    <div className={styles['home-view-container']}>
      <div className={styles['home-view']}>
        <div>
          <HomeSidebar />
        </div>
        <div className={styles['home-main']}>
          {!Number.isNaN(currentConvoData.channel.id) && <ConversationView />}
        </div>
      </div>
    </div>
  );
}

export default HomeView;
