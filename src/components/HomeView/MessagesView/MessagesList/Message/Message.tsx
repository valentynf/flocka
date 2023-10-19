import styles from './Message.module.css';

const testMes = `Hello, Jim`;

function Message() {
  return (
    <div className={styles['message-container']}>
      <div className={styles['img-container']}>
        <img
          src="src/assets/images/user-image.jpeg"
          className={styles['user-image']}
        />
      </div>

      <p className={styles['username']}>Dwight Schrute</p>
      <span className={styles['timestamp']}>13:40</span>
      <p className={styles['message']}>{testMes}</p>
    </div>
  );
}

export default Message;
