import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';
import styles from './ConvoView.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types/appTypes';
import ConvoHeader from './ConvoHeader/ConvoHeader';
import useChannelSub from '../../../../hooks/useChannelSub';

function ConvoView() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  useChannelSub(currentConvoData?.id);

  return (
    <div className={styles['messages-view']}>
      {currentConvoData && (
        <>
          <div>
            <ConvoHeader
              type={currentConvoData.type}
              name={currentConvoData.name}
            />
          </div>
          <div className={styles['messages']}>
            <MessagesList data={currentConvoData.messages} />
          </div>
          <div>
            <MessageInput placeholder={currentConvoData.name} />
          </div>
        </>
      )}
    </div>
  );
}

export default ConvoView;
