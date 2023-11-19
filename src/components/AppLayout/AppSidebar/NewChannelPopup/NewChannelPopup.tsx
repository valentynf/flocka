import { useEffect, useRef, useState } from 'react';
import { AppDispatch, RootState } from '../../../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { addNewChannel } from '../../../../store/slices/homeSlice';
import AppPopup from '../../../shared/AppPopup/AppPopup';
import styles from './NewChannelPopup.module.css';
import { ThreeCircles } from 'react-loader-spinner';
import useExistingChannel from '../../../../hooks/useExistingChannel';
import { isMatchingThePattern } from '../../../../utils/helper';
import PublicChannelIcon from '../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';

type NewChannelPopupProps = {
  hidePopup: () => void;
};

function NewChannelPopup({ hidePopup }: NewChannelPopupProps) {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user_data);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [inputValue, setInputValue] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInputFocused, setIsInputFocused] = useState<boolean>(true);

  const isValidText = isMatchingThePattern(
    inputValue,
    '^[a-z0-9]+(-[a-z0-9]+)*$'
  );
  const { isExistingChannel, isCheckingExistingChannel } =
    useExistingChannel(inputValue);

  const isValidInput =
    !isExistingChannel && inputValue.length > 3 && isValidText;
  const isEmptyInput = inputValue.length === 0;
  const isError = !isValidInput && !isLoading && !isEmptyInput;

  const errorMessage = isExistingChannel
    ? 'Channel with this name already exists'
    : 'Give your channel a proper name to continue (lowercase letters, numbers, and hyphens).';

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

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <AppPopup name="Create a channel" hidePopup={hidePopup}>
      <div className={styles['input']}>
        <label className={styles['input-label']}>Name</label>
        <div className={styles['channel-icon']}>
          <PublicChannelIcon />
        </div>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          className={`${styles['input-field']} ${
            isError ? styles['input-error'] : ''
          } ${isInputFocused && !isLoading ? styles['input-focused'] : ''}`}
          type="text"
          placeholder="e.g #start-a-cult"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          maxLength={30}
          disabled={isLoading}
        />
        <span className={styles['char-counter']}>
          {30 - inputValue.length || ''}
        </span>
        {isError ? (
          <p className={styles['input-error-info']}>
            <span className={styles['alert-icon']}>⚠</span> {errorMessage}
          </p>
        ) : (
          <p className={styles['input-description']}>
            Channels are where conversations happen around a topic. Use a simple
            name.
          </p>
        )}
      </div>
      <div className={styles['submit']}>
        {isLoading ? (
          <ThreeCircles height="50" width="50" color="#33174d" />
        ) : (
          <>
            {isCheckingExistingChannel && (
              <div className={styles['small-loader']}>
                <ThreeCircles height="35" width="35" color="#33174d" />
              </div>
            )}
            <button
              onClick={handleCreateChannel}
              disabled={
                !isValidInput || isCheckingExistingChannel || isEmptyInput
              }
              className={styles['create-channel-button']}
            >
              Create
            </button>
          </>
        )}
      </div>
    </AppPopup>
  );
}

export default NewChannelPopup;
