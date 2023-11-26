import { useSelector } from 'react-redux';
import AppPopup from '../../../../../../shared/AppPopup/AppPopup';
import styles from './AddMembersPopup.module.css';
import { RootState, UsersData } from '../../../../../../../types/appTypes';
import { focusInput, getChannelIcon } from '../../../../../../../utils/helper';
import { useEffect, useRef, useState } from 'react';
import useAppMembers from '../../../../../../../hooks/useAppMembers';
import { ThreeCircles } from 'react-loader-spinner';
import { USER_NAME_MAX_LENGTH } from '../../../../../../../config/config';
import PlusIcon from '../../../../../../../icons/AppLayout/AppSidebar/PlusIcon';

type AddMembersPopupProps = {
  hidePopup: () => void;
};

function AddMembersPopup({ hidePopup }: AddMembersPopupProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [usersToAdd, setUsersToAdd] = useState<UsersData[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const usersRecord = useSelector(
    (state: RootState) => state.app_data.users_data
  );

  const { isLoadingMembers, searchResult } = useAppMembers(inputValue);

  const hasUsersToAdd = usersToAdd.length > 0 ? true : false;

  const hasSearchResults =
    !isLoadingMembers && searchResult !== null && inputValue.trim() !== '';

  const { name, type, participants } = currentConvoData.channel;
  const icon = getChannelIcon(type);

  useEffect(() => {
    focusInput(inputRef);
  }, []);

  const handleAddMembersClick = () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchResultClick = (userData: UsersData) => {
    setUsersToAdd((oldState) => [...oldState, userData]);
    setInputValue('');
  };

  const handleRemoveUserClick = (userId: string) => {
    setUsersToAdd((oldState) => oldState.filter((item) => item.id !== userId));
    focusInput(inputRef);
  };

  return (
    <AppPopup
      hidePopup={hidePopup}
      prefix={'Add people to'}
      name={name}
      icon={icon}
    >
      <div className={styles['add-members-popup']}>
        <div className={styles['input-field']}>
          {usersToAdd.map((userData, i) => {
            const { name, avatar_src, id } = userData;

            return (
              <div key={i} className={styles['member-to-add']}>
                <img className={styles['user-image']} src={avatar_src} />
                <span className={styles['username']}>{name}</span>
                <button
                  onClick={() => handleRemoveUserClick(id)}
                  className={styles['close-button']}
                >
                  <PlusIcon />
                </button>
              </div>
            );
          })}
          <input
            ref={inputRef}
            onChange={handleInputChange}
            value={inputValue}
            placeholder={hasUsersToAdd ? '' : 'for example, Herman'}
            className={styles['input']}
            maxLength={USER_NAME_MAX_LENGTH}
          ></input>
          {isLoadingMembers && (
            <div
              className={`${styles['search-dropdown']} ${styles['dropdown-loader']}`}
            >
              <div className={styles['loader']}>
                <ThreeCircles height="25" width="25" color="#6b31ad" />
                <span>Loading results</span>
              </div>
            </div>
          )}
          {hasSearchResults && searchResult.length > 0 && (
            <div className={styles['search-dropdown']}>
              {searchResult.map((user) => {
                const userRecord = usersRecord[user.id];
                const { name, avatar_src } = userRecord;
                const userData = { name, avatar_src, id: user.id };
                const isExistingMember = participants.includes(user.id);
                const isAlreadyAdded = usersToAdd.some(
                  (addedUser) =>
                    addedUser.id === user.id &&
                    addedUser.name === name &&
                    addedUser.avatar_src === avatar_src
                );

                return (
                  <div
                    onClick={
                      isAlreadyAdded || isExistingMember
                        ? undefined
                        : () => handleSearchResultClick(userData)
                    }
                    key={user.id}
                    className={`${styles['search-result']} ${
                      isAlreadyAdded ? styles['is-already-added'] : ''
                    } ${isExistingMember ? styles['is-existing-user'] : ''}`}
                  >
                    <div className={styles['user-info']}>
                      <img className={styles['user-image']} src={avatar_src} />
                      <span className={styles['username']}>{name}</span>
                    </div>
                    {isExistingMember && (
                      <div className={styles['existing-member-message']}>
                        <span>Already in this channel</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          {hasSearchResults && searchResult.length === 0 && (
            <div
              className={`${styles['search-dropdown']} ${styles['no-matches']}`}
            >
              <span>No matches found</span>
            </div>
          )}
        </div>

        <div className={styles['button-container']}>
          <button
            onClick={handleAddMembersClick}
            className={styles['button-submit']}
            disabled={!hasUsersToAdd}
          >
            Add
          </button>
        </div>
      </div>
    </AppPopup>
  );
}

export default AddMembersPopup;
