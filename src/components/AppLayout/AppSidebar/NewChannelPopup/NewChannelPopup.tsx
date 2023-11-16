import { useEffect, useRef, useState } from 'react';
import useClickOverlay from '../../../../hooks/useClickOverlay';
import styles from './NewChannelPopup.module.css';
import PlusIcon from '../../../../icons/AppLayout/AppSidebar/PlusIcon';
import PublicChannelIcon from '../../../../icons/AppLayout/HomeView/HomeSidebar/CollapsibleList/PubilcChannelIcon';

type NewChannelPopupProps = {
  hidePopup: () => void;
};

function NewChannelPopup({ hidePopup }: NewChannelPopupProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(true);

  const isValidInput = /^[a-z0-9]+(-[a-z0-9]+)*$/.test(inputValue);

  useClickOverlay(overlayRef, hidePopup);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
    <div ref={overlayRef} className={styles['overlay']}>
      <div className={styles['add-channel-modal']}>
        <div className={styles['modal-header']}>
          <h3 className={styles['heading']}>Create a channel</h3>
          <button onClick={hidePopup} className={styles['close-button']}>
            <PlusIcon />
          </button>
        </div>
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
              inputValue.length === 0 || (!isValidInput && !isInputFocused)
                ? styles['input-error']
                : ''
            } ${isInputFocused ? styles['input-focused'] : ''}`}
            type="text"
            placeholder="e.g #start-a-cult"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            maxLength={30}
          />
          <span className={styles['char-counter']}>
            {30 - inputValue.length || ''}
          </span>
          {inputValue.length === 0 || (!isValidInput && !isInputFocused) ? (
            <p className={styles['input-error-info']}>
              <span className={styles['alert-icon']}>⚠</span> Give your channel
              a proper name to continue (lowercase letters, numbers and
              hyphens).
            </p>
          ) : (
            <p className={styles['input-description']}>
              Channels are where conversation happen around a topic. Use a
              simple name.
            </p>
          )}
        </div>
        <div className={styles['modal-footer']}>
          <button className={styles['create-channel-button']}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default NewChannelPopup;
