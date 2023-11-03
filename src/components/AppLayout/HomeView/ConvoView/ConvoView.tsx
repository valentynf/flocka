import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';
import styles from './ConvoView.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types/appTypes';
import ConvoHeader from './MessagesHeader/ConvoHeader';

function ConvoView() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  return (
    <div className={styles['messages-view']}>
      {currentConvoData && (
        <>
          <div className={styles['header']}>
            <ConvoHeader
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
