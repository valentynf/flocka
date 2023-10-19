import Message from './Message/Message';
import styles from './MessagesList.module.css';

function MessagesList() {
  return (
    <div className={styles['messages-list']}>
      <div className={styles['reverse-scroll']}>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  );
}

export default MessagesList;
