import { MessageData } from '../../../../../types/appTypes';
import styles from './MessagesList.module.css';
import Message from './Message/Message';

type MessagesListProps = {
  data: MessageData[];
};

function MessagesList({ data }: MessagesListProps) {
  return (
    <div className={styles['messages-list']}>
      <div className={styles['reverse-scroll']}>
        {data.map((el) => (
          <Message data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default MessagesList;
