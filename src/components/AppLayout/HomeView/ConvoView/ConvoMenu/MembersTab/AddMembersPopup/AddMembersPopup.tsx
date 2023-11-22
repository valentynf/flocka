import { useSelector } from 'react-redux';
import AppPopup from '../../../../../../shared/AppPopup/AppPopup';
import styles from './AddMembersPopup.module.css';
import { RootState } from '../../../../../../../types/appTypes';
import { getChannelIcon } from '../../../../../../../utils/helper';

type AddMembersPopupProps = {
  hidePopup: () => void;
};

function AddMembersPopup({ hidePopup }: AddMembersPopupProps) {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );
  const { name, type } = currentConvoData.channel;
  const icon = getChannelIcon(type);

  const handleAddMembersClick = () => {};

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
            placeholder="for example, Herman"
            className={styles['input']}
          ></input>
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
