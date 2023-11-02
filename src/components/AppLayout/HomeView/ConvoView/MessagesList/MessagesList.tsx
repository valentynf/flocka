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
        {
          data.map((el, i) => (
            <Post data={el} key={i} />
          ))
          //adding pathetic workaround with reverse for the resize bug
        }
      </div>
    </div>
  );
}

export default MessagesList;
