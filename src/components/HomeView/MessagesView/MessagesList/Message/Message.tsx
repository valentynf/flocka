import React from 'react';
import styles from './Message.module.css';

const testMes = `Hello, Jim. 
I'm just stopping by to remind you about our upcoming sales meeting. 
It's important that you attend. 
Sincerely, Dwight Schrute`;

//temporary multiline text solution for testig
const formattedText = testMes.split('\n').map((line, index) => (
  <React.Fragment key={index}>
    {line}
    <br />
  </React.Fragment>
));

function Message() {
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
          <span className={styles['username']}>Dwight Schrute</span>
          <span className={styles['timestamp']}>13:40</span>
        </div>
        <div className={styles['content']}>
          <p className={styles['text']}>{formattedText}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
