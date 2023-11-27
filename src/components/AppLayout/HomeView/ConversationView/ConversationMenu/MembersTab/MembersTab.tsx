import { useSelector } from 'react-redux';
import styles from './MembersTab.module.css';
import { RootState } from '../../../../../../types/appTypes';
import NewUserIcon from '../../../../../../icons/AppLayout/HomeView/ConvoView/ConvoMenu/NewUserIcon';
import { useState } from 'react';
import AddMembersPopup from './AddMembersPopup/AddMembersPopup';

function MembersTab() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const usersData = useSelector(
    (state: RootState) => state.app_data.users_data
  );
  const { participants } = currentConvoData.channel;

  const [isAddMembersPopupOpen, setIsAddMembersPopupOpen] =
    useState<boolean>(false);

  const toggleAddMembersMenu = () => {
    setIsAddMembersPopupOpen((oldValue) => !oldValue);
  };

  return (
    <div className={styles['members-tab']}>
      {isAddMembersPopupOpen && (
        <AddMembersPopup hidePopup={toggleAddMembersMenu} />
      )}
      <button
        onClick={toggleAddMembersMenu}
        className={`${styles['add-people']} ${styles['list-item']}`}
      >
        <div className={styles['add-icon']}>
          <NewUserIcon color={'#6930aa'} />
        </div>
        <span className={styles['member-name']}>Add a soul</span>
      </button>
      <div className={styles['participants-list']}>
        {participants.map((userId, index) => {
          const userData = usersData[userId];
          const imageSource = userData
            ? userData.avatar_src
            : '/assets/images/user-image.jpeg';
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
