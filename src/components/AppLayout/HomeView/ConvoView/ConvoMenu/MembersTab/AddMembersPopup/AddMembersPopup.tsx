import { useSelector } from 'react-redux';
import AppPopup from '../../../../../../shared/AppPopup/AppPopup';
import styles from './AddMembersPopup.module.css';
import { RootState } from '../../../../../../../types/appTypes';
import { getChannelIcon } from '../../../../../../../utils/helper';
import { useState } from 'react';
import useAppMembers from '../../../../../../../hooks/useAppMembers';

type AddMembersPopupProps = {
  hidePopup: () => void;
};

function AddMembersPopup({ hidePopup }: AddMembersPopupProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  const { isLoadingMembers, searchResult } = useAppMembers(inputValue);

  const { name, type } = currentConvoData.channel;
  const icon = getChannelIcon(type);

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
            onChange={handleInputChange}
            value={inputValue}
            placeholder="for example, Herman"
            className={styles['input']}
          ></input>
          {isLoadingMembers ||
            (searchResult.length > 1 && (
              <div className={styles['input-dropdown']}>
                {searchResult.map((el) => (
                  <p>{el.id}</p>
                ))}
              </div>
            ))}
        </div>
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
