import { MessageData, RootState } from '../../../../../types/appTypes';
import styles from './MessagesList.module.css';
import Message from './Message/Message';
import { useSelector } from 'react-redux';
import useParticipants from '../../../../../hooks/useParticipants';

type MessagesListProps = {
  data: MessageData[];
};

function MessagesList({ data }: MessagesListProps) {
  const participantIds = useSelector(
    (state: RootState) => state.home.current_convo.channel.participants
  );

  const { participantsData } = useParticipants(participantIds);

  const fullData = data.map((message) => {
    const participant = participantsData[message.senderId];

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
