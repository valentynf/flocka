import { MessageData, RootState } from '../../../../../types/appTypes';
import styles from './MessagesList.module.css';
import Message from './Message/Message';
import { useSelector } from 'react-redux';

type MessagesListProps = {
  data: MessageData[];
};

function MessagesList({ data }: MessagesListProps) {
  const usersRecord = useSelector(
    (state: RootState) => state.app_data.users_data
  );

  const fullData = data.map((message) => {
    const participant = usersRecord[message.senderId];

    return {
      id: message.id,
      timestamp: message.timestamp,
      message: message.message,
      name: participant ? participant.name : 'Deleted User',
      avatar_src: participant
        ? participant.avatar_src
        : 'src/assets/images/user-image.jpeg',
    };
  });

  return (
    <div className={styles['messages-list']}>
      <div className={styles['reverse-scroll']}>
        {fullData.map((message, i) => {
          const currentDate = new Date(message.timestamp).toLocaleDateString();
          const nextDate =
            i < fullData.length - 1
              ? new Date(fullData[i + 1].timestamp).toLocaleDateString()
              : null;

          const isFirstToday =
            i === fullData.length - 1 || currentDate !== nextDate;

          return (
            <Message
              firstToday={isFirstToday}
              data={message}
              key={message.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MessagesList;
