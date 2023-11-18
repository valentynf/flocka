import { useEffect, useRef, useState } from 'react';
import styles from './NewChannelPopup.module.css';
import PlusIcon from '../../../../icons/AppLayout/AppSidebar/PlusIcon';
import { AppDispatch, RootState } from '../../../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChannel } from '../../../../store/slices/homeSlice';
import PopupOverlay from '../../../shared/PopupOverlay/PopupOverlay';
import ChannelInput from './ChannelInput/ChannelInput';

type NewChannelPopupProps = {
  hidePopup: () => void;
};

function NewChannelPopup({ hidePopup }: NewChannelPopupProps) {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user_data);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCreateButtonClick = () => {
    if (userData) {
      setIsLoading(true);
      dispatch(
        addNewChannel({ channel_name: inputValue, user_id: userData.id })
      ).finally(() => {
        setIsLoading(false);
        hidePopup();
      });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <PopupOverlay onClick={hidePopup}>
      <div className={styles['add-channel-modal']}>
        <div className={styles['modal-header']}>
          <h3 className={styles['heading']}>Create a channel</h3>
          <button onClick={hidePopup} className={styles['close-button']}>
            <PlusIcon />
          </button>
        </div>
        <ChannelInput
          inputRef={inputRef}
          inputValue={inputValue}
          handleInputChange={handleInputChange}
          handleSubmit={handleCreateButtonClick}
          isSubmitting={isLoading}
          pattern="^[a-z0-9]+(-[a-z0-9]+)*$"
        />
      </div>
    </PopupOverlay>
  );
}

export default NewChannelPopup;
