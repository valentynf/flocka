import styles from './Message.module.css';
import { FullMessageData } from '../../../../../../types/appTypes';
import { formatTimestamp } from '../../../../../../utils/helper';

type MessageProps = {
  data: FullMessageData;
};

function Message({ data }: MessageProps) {
  const { name, avatar_src, timestamp, message } = data;
  return (
    <div className={styles['message-container']}>
      <div className={styles['img-container']}>
        <img src={avatar_src} className={styles['user-image']} />
      </div>
      <div className={styles['message']}>
        <div className={styles['header']}>
          <span className={styles['username']}>{name}</span>
          <span className={styles['timestamp']}>
            {formatTimestamp(timestamp)}
          </span>
        </div>
        <div className={styles['content']}>
          <p className={styles['text']}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
