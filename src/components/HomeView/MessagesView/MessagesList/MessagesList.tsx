import Message from './Message/Message';
import styles from './MessagesList.module.css';

function MessagesList() {
  return (
    <div className={styles['messages-list']}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}

export default MessagesList;
