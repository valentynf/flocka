import DraftSentIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/QuickAccess/DraftSentIcon';
import styles from './MessageInput.module.css';

type MessageInputProps = {
  placeholder: string;
};

function MessageInput({ placeholder }: MessageInputProps) {
  return (
    <div className={styles['input-container']}>
      <div className={styles['input-field']}>
        <button className={styles['button-send']}>
          <DraftSentIcon strokeColor="#037a5a" fill="#fff" />
        </button>
        <textarea
          className={styles['text-area']}
          placeholder={`Message ${placeholder}`}
        ></textarea>
      </div>
    </div>
  );
}

export default MessageInput;
