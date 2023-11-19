import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '../../../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChannel } from '../../../../store/slices/homeSlice';
import ChannelInput from './ChannelInput/ChannelInput';
import AppPopup from '../../../shared/AppPopup/AppPopup';

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

  const handleCreateChannel = () => {
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
    <AppPopup name="Create a channel" hidePopup={hidePopup}>
      <ChannelInput
        inputRef={inputRef}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        handleSubmit={handleCreateChannel}
        isSubmitting={isLoading}
        pattern="^[a-z0-9]+(-[a-z0-9]+)*$"
      />
    </AppPopup>
  );
}

export default NewChannelPopup;
