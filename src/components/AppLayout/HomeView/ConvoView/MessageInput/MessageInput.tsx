import { ChangeEvent, useState } from 'react';
import DraftSentIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/QuickAccess/DraftSentIcon';
import styles from './MessageInput.module.css';
import { AppDispatch, RootState } from '../../../../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../../../store/slices/homeSlice';
import { generateMessage } from '../../../../../utils/helper';

type MessageInputProps = {
  placeholder: string;
};

function MessageInput({ placeholder }: MessageInputProps) {
  const [messageText, setMessageText] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user_data);
  const convoData = useSelector((state: RootState) => state.home.current_convo);

  const handleSendClick = () => {
    if (userData) {
      const message = generateMessage(userData.id, messageText);
      setMessageText('');
      dispatch(sendMessage({ channelId: convoData.channel.id, message }));
    }
  };

  const handleTextUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
  };

  return (
    <div className={styles['input-container']}>
      <div className={styles['input-field']}>
        <button onClick={handleSendClick} className={styles['button-send']}>
          <DraftSentIcon strokeColor="#037a5a" fill="#fff" />
        </button>
        <textarea
          value={messageText}
          onChange={handleTextUpdate}
          className={styles['text-area']}
          placeholder={`Message ${placeholder}`}
        ></textarea>
      </div>
    </div>
  );
}

export default MessageInput;
