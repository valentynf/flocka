import MessageInput from './MessageInput/MessageInput';
import MessagesHeader from './MessagesHeader/MessagesHeader';
import MessagesList from './MessagesList/MessagesList';
import styles from './ConvoView.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types/appTypes';

function ConvoView() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.currentConvo
  );

  return (
    <div className={styles['messages-view']}>
      {currentConvoData && (
        <>
          <div className={styles['header']}>
            <MessagesHeader
              type={currentConvoData.type}
              name={currentConvoData.name}
            />
          </div>
          <div className={styles['messages']}>
            <MessagesList data={currentConvoData.messages} />
          </div>
          <div className={styles['message-input']}>
            <MessageInput />
          </div>
        </>
      )}
    </div>
  );
}

export default ConvoView;
