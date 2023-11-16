import { useRef } from 'react';
import useClickOverlay from '../../../../hooks/useClickOverlay';
import styles from './NewChannelPopup.module.css';
import PlusIcon from '../../../../icons/AppLayout/AppSidebar/PlusIcon';

type NewChannelPopupProps = {
  hidePopup: () => void;
};

function NewChannelPopup({ hidePopup }: NewChannelPopupProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useClickOverlay(overlayRef, hidePopup);

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
          <input
            className={styles['input-field']}
            type="text"
            placeholder="e.g start-a-cult"
          />
          <p className={styles['input-error']}>
            <span className={styles['alert-icon']}>⚠</span> Give your channel a
            name to continue
          </p>
          <p className={styles['input-description']}>
            Channels are where conversation happen around a topic. Use a simple
            name.
          </p>
        </div>
        <div className={styles['modal-footer']}>
          <button className={styles['create-channel-button']}>Create</button>
        </div>
      </div>
    </div>
  );
}

export default NewChannelPopup;
