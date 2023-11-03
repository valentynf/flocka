import { Message } from '../../../../../types/appTypes';
import Post from './Post/Post';
import styles from './MessagesList.module.css';

type MessagesListProps = {
  data: Message[];
};

function MessagesList({ data }: MessagesListProps) {
  return (
    <div className={styles['messages-list']}>
      <div className={styles['reverse-scroll']}>
        {data.map((el) => (
          <Post data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default MessagesList;
