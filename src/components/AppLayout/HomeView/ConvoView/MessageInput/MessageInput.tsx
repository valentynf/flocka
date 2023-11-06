import { ChangeEvent, useState } from 'react';
import DraftSentIcon from '../../../../../icons/AppLayout/HomeView/HomeSidebar/QuickAccess/DraftSentIcon';
import styles from './MessageInput.module.css';
import {
  AppDispatch,
  MessageData,
  RootState,
} from '../../../../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../../../../../store/slices/homeSlice';

type MessageInputProps = {
  placeholder: string;
};

function MessageInput({ placeholder }: MessageInputProps) {
  const [messageText, setMessageText] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user_data);
  const convoData = useSelector((state: RootState) => state.home.current_convo);

  const handleSendClick = () => {
    console.log(messageText);
    const message: MessageData = {
      message: messageText,
      timestamp: Date.now(),
      uuid: userData ? userData.id : '',
      id: 400,
    };
    dispatch(sendMessage({ channelId: convoData.channel.id, message }));
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
