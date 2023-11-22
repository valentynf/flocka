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

  return (
    <AppPopup
      hidePopup={hidePopup}
      prefix={'Add members to'}
      name={name}
      icon={icon}
    >
      <div className={styles['add-members-popup']}></div>
    </AppPopup>
  );
}

export default AddMembersPopup;
