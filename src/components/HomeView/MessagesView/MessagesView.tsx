import MessagesHeader from './MessagesTopbar/MessagesHeader';
import styles from './MessagesView.module.css';

function MessagesView() {
  return (
    <div className={styles['messages-view']}>
      <div className={styles['header']}>
        <MessagesHeader />
      </div>
      <div className={styles['messages-list']}></div>
      <div className={styles['message-input']}></div>
    </div>
  );
}

export default MessagesView;
