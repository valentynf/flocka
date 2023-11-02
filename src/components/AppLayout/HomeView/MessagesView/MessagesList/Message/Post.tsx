import styles from './Post.module.css';
import { Message } from '../../../../../../types/appTypes';

type MessageProps = {
  data: Message;
};

function Post({ data }: MessageProps) {
  const { user_id, timestamp, message } = data;
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
          <span className={styles['username']}>{user_id}</span>
          <span className={styles['timestamp']}>{timestamp}</span>
        </div>
        <div className={styles['content']}>
          <p className={styles['text']}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
