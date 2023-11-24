import { useSelector } from 'react-redux';
import AppPopup from '../../../../../../shared/AppPopup/AppPopup';
import styles from './AddMembersPopup.module.css';
import { RootState } from '../../../../../../../types/appTypes';
import { getChannelIcon } from '../../../../../../../utils/helper';
import { useEffect, useRef, useState } from 'react';
import useAppMembers from '../../../../../../../hooks/useAppMembers';
import { ThreeCircles } from 'react-loader-spinner';

type AddMembersPopupProps = {
  hidePopup: () => void;
};

function AddMembersPopup({ hidePopup }: AddMembersPopupProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  const { isLoadingMembers, searchResult } = useAppMembers(inputValue);

  const hasSearchResults =
    !isLoadingMembers && searchResult !== null && inputValue.trim() !== '';

  const { name, type } = currentConvoData.channel;
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

  return (
    <AppPopup
      hidePopup={hidePopup}
      prefix={'Add people to'}
      name={name}
      icon={icon}
    >
      <div className={styles['add-members-popup']}>
        <div className={styles['input-field']}>
          <input
            ref={inputRef}
            onChange={handleInputChange}
            value={inputValue}
            placeholder="for example, Herman"
            className={styles['input']}
          ></input>
        </div>
        {isLoadingMembers && (
          <div className={styles['search-dropdown']}>
            <ThreeCircles height="35" width="35" color="#33174d" />
          </div>
        )}
        {hasSearchResults && searchResult.length > 0 && (
          <div className={styles['search-dropdown']}>
            {searchResult.map((el) => (
              <p key={el.id}>{el.id}</p>
            ))}
          </div>
        )}
        {hasSearchResults && searchResult.length === 0 && (
          <div className={styles['search-dropdown']}>No matches found</div>
        )}
        <div className={styles['button-container']}>
          <button
            onClick={handleAddMembersClick}
            className={styles['button-submit']}
          >
            Add
          </button>
        </div>
      </div>
    </AppPopup>
  );
}

export default AddMembersPopup;
