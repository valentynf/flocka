import DraftSentIcon from '../../../../icons/HomeView/HomeSidebar/QuickAccess/DraftSentIcon';
import styles from './MessageInput.module.css';

function MessageInput() {
  return (
    <div className={styles['input-container']}>
      <div className={styles['input-field']} contentEditable="true">
        <button className={styles['button-send']}>
          <DraftSentIcon strokeColor="#037a5a" fill="#fff" />
        </button>
        <textarea
          className={styles['text-area']}
          placeholder="Message Dwight Schrute"
        ></textarea>
      </div>
    </div>
  );
}

export default MessageInput;
