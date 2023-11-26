import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';
import styles from './ConversationView.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types/appTypes';
import useConversationSub from '../../../../hooks/useConversationSub';
import { ThreeCircles } from 'react-loader-spinner';
import ConversationHeader from './ConversationHeader/ConversationHeader';

function ConversationView() {
  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  const isLoadingMessages = useConversationSub(currentConvoData?.channel.id);

  return (
    <div className={styles['messages-view']}>
      <div>
        <ConversationHeader
          type={currentConvoData.channel.type}
          name={currentConvoData.channel.name}
        />
      </div>
      <div className={styles['messages']}>
        {isLoadingMessages ? (
          <div className={styles['loader']}>
            <ThreeCircles height="130" width="130" color="#212529" />
          </div>
        ) : (
          <MessagesList data={currentConvoData.messages} />
        )}
      </div>
      <div>
        <MessageInput
          isDisabled={isLoadingMessages}
          placeholder={currentConvoData.channel.name}
        />
      </div>
    </div>
  );
}

export default ConversationView;
