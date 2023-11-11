import { MessageData, RootState } from '../../../../../types/appTypes';
import styles from './MessagesList.module.css';
import Message from './Message/Message';
import { useSelector } from 'react-redux';

type MessagesListProps = {
  data: MessageData[];
};

function MessagesList({ data }: MessagesListProps) {
  const pariticapsData = useSelector(
    (state: RootState) => state.app_data.users_data
  );

  const fullData = data.map((message) => {
    const participant = pariticapsData[message.senderId];

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
        {fullData.map((el) => (
          <Message data={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default MessagesList;
