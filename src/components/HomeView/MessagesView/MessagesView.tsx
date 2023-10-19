import MessageInput from './MessageInput/MessageInput';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import MessagesList from './MessagesList/MessagesList';
import styles from './MessagesView.module.css';

function MessagesView() {
  return (
    <div className={styles['messages-view']}>
      <div className={styles['header']}>
        <MessagesHeader />
      </div>
      <div className={styles['messages']}>
        <MessagesList />
      </div>
      <div className={styles['message-input']}>
        <MessageInput />
      </div>
    </div>
  );
}

export default MessagesView;
