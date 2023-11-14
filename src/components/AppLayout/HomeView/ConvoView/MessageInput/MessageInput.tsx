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
  const isEmptyInput = messageText.length === 0;

  const handleSendClick = () => {
    if (userData) {
      const message = generateMessage(userData.id, messageText);
      setMessageText('');
      dispatch(sendMessage({ channelId: convoData.channel.id, message }));
    }
  };

  const handleEnterToSend = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !isEmptyInput) {
      e.preventDefault();
      handleSendClick();
    }
  };

  const handleTextUpdate = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(e.target.value);
  };

  return (
    <div className={styles['input-container']}>
      <div className={styles['input-field']}>
        <button
          disabled={isEmptyInput}
          onClick={handleSendClick}
          className={styles['button-send']}
        >
          <DraftSentIcon
            //don't like this solution, but i won't look at it
            strokeColor={isEmptyInput ? '#212529' : '#037a5a'}
            fill={isEmptyInput ? '#5d6062' : '#fff'}
          />
        </button>
        <textarea
          value={messageText}
          onChange={handleTextUpdate}
          onKeyDown={handleEnterToSend}
          className={styles['text-area']}
          placeholder={`Message ${placeholder}`}
        ></textarea>
      </div>
      <div
        className={`${styles['tip-container']} ${
          messageText.length >= 3 ? styles['tip-active'] : ''
        }`}
      >
        <p className={styles['shift-enter-tip']}>
          <span className={styles['key-stroke']}>Shift + Return</span> to add a
          new line
        </p>
      </div>
    </div>
  );
}

export default MessageInput;
