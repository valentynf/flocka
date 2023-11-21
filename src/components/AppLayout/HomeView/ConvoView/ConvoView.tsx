import MessageInput from './MessageInput/MessageInput';
import MessagesList from './MessagesList/MessagesList';
import styles from './ConvoView.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../types/appTypes';
import ConvoHeader from './ConvoHeader/ConvoHeader';
import useConvoSub from '../../../../hooks/useConvoSub';
import { ThreeCircles } from 'react-loader-spinner';
// import { useState } from 'react';

function ConvoView() {
  // const [isConvoMenuOpened, setIsConvoMenuOpened] = useState<boolean>(false);

  const currentConvoData = useSelector(
    (state: RootState) => state.home.current_convo
  );

  const isLoadingMessages = useConvoSub(currentConvoData?.channel.id);

  return (
    <div className={styles['messages-view']}>
      <div>
        <ConvoHeader
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

export default ConvoView;
