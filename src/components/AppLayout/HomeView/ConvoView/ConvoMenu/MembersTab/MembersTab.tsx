import { useSelector } from 'react-redux';
import styles from './MembersTab.module.css';
import { RootState } from '../../../../../../types/appTypes';
import NewUserIcon from '../../../../../../icons/AppLayout/HomeView/ConvoView/ConvoMenu/NewUserIcon';

function MembersTab() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const usersData = useSelector(
    (state: RootState) => state.app_data.users_data
  );
  const { participants } = currentConvoData.channel;

  return (
    <div className={styles['members-tab']}>
      <div className={`${styles['add-people']} ${styles['list-item']}`}>
        <div className={styles['add-icon']}>
          <NewUserIcon color={'#6930aa'} />
        </div>
        <span className={styles['member-name']}>Add a soul</span>
      </div>
      <div className={styles['participants-list']}>
        {participants.map((userId, index) => {
          const userData = usersData[userId];
          const imageSource = userData
            ? userData.avatar_src
            : 'src/assets/images/user-image.jpeg';
          const userName = userData ? userData.name : 'Deleted User';

          return (
            <div
              key={index}
              className={`${styles['member-container']} ${styles['list-item']}`}
            >
              <img className={styles['member-avatar']} src={imageSource} />
              <span className={styles['member-name']}>{userName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MembersTab;
