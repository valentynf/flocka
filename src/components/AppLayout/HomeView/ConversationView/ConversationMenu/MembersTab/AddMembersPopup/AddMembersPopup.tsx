import { useSelector } from 'react-redux';
import AppPopup from '../../../../../../shared/AppPopup/AppPopup';
import styles from './AddMembersPopup.module.css';
import { RootState, UsersData } from '../../../../../../../types/appTypes';
import { getChannelIcon } from '../../../../../../../utils/helper';
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
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleAddMembersClick = () => {};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchResultClick = (userData: UsersData) => {
    setUsersToAdd((oldValue) => [...oldValue, userData]);
    // setInputValue('');
  };

  const handleRemoveUser = () => {};

  return (
    <AppPopup
      hidePopup={hidePopup}
      prefix={'Add people to'}
      name={name}
      icon={icon}
    >
      <div className={styles['add-members-popup']}>
        <div className={styles['input-field']}>
          {usersToAdd.map(({ name, avatar_src }, i) => {
            return (
              <div key={i} className={styles['member-to-add']}>
                <img className={styles['user-image']} src={avatar_src} />
                <span className={styles['username']}>{name}</span>
                <button
                  onClick={handleRemoveUser}
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
                const usersData = usersRecord[user.id];
                const { name, avatar_src } = usersData;
                const isExistingMember = participants.includes(user.id);
                return (
                  <div
                    onClick={() =>
                      handleSearchResultClick({ id: user.id, name, avatar_src })
                    }
                    key={user.id}
                    className={styles['search-result']}
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