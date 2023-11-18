import { useState } from 'react';
import PublicChannelIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';
import styles from './ChannelInput.module.css';
import useExistingChannel from '../../../../../hooks/useExistingChannel';
import { isMatchingThePattern } from '../../../../../utils/helper';
import { ThreeCircles } from 'react-loader-spinner';

type ChannelInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  inputValue: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  isSubmitting: boolean;
  pattern: string;
};

function ChannelInput({
  inputValue,
  handleInputChange,
  inputRef,
  pattern,
  isSubmitting,
  handleSubmit,
}: ChannelInputProps) {
  const [isInputFocused, setIsInputFocused] = useState<boolean>(true);

  const isValidText = isMatchingThePattern(inputValue, pattern);
  const isExistingChannel = useExistingChannel(inputValue);

  const isValidInput =
    !isExistingChannel && inputValue.length > 3 && isValidText;

  const errorMessage = isExistingChannel
    ? 'Channel with this name already exists'
    : `Give your channel
a proper name to continue (lowercase letters, numbers and
hyphens).`;

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setInputValue(event.target.value);
  //   };

  return (
    <>
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
            !isValidInput && !isSubmitting ? styles['input-error'] : ''
          } ${isInputFocused && !isSubmitting ? styles['input-focused'] : ''}`}
          type="text"
          placeholder="e.g #start-a-cult"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          maxLength={30}
          disabled={isSubmitting}
        />
        <span className={styles['char-counter']}>
          {30 - inputValue.length || ''}
        </span>
        {!isValidInput && !isSubmitting ? (
          <p className={styles['input-error-info']}>
            <span className={styles['alert-icon']}>⚠</span> {errorMessage}
          </p>
        ) : (
          <p className={styles['input-description']}>
            Channels are where conversation happen around a topic. Use a simple
            name.
          </p>
        )}
      </div>
      <div className={styles['submit']}>
        {isSubmitting ? (
          <ThreeCircles height="50" width="50" color="#33174d" />
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isValidInput}
            className={styles['create-channel-button']}
          >
            Create
          </button>
        )}
      </div>
    </>
  );
}

export default ChannelInput;
