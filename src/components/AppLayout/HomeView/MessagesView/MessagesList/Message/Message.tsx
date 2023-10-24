import styles from './Message.module.css';
import { MessageDataType } from '../../../../../../types/appTypes';

type MessagePropsType = {
  data: MessageDataType;
};

function Message({ data }: MessagePropsType) {
  const { username, timestamp, message } = data;
  return (
    <div className={styles['message-container']}>
      <div className={styles['img-container']}>
        <img
          src="src/assets/images/user-image.jpeg"
          className={styles['user-image']}
        />
      </div>
      <div className={styles['message']}>
        <div className={styles['header']}>
          <span className={styles['username']}>{username}</span>
          <span className={styles['timestamp']}>{timestamp}</span>
        </div>
        <div className={styles['content']}>
          <p className={styles['text']}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
