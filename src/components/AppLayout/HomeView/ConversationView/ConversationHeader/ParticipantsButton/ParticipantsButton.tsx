import { useSelector } from 'react-redux';
import styles from './ParticipantsButton.module.css';
import { RootState } from '../../../../../../types/appTypes';
import { getThreeParticipants } from '../../../../../../utils/helper';

type ParticipantsButtonProps = {
  onClick: () => void;
};

function ParticipantsButton({ onClick }: ParticipantsButtonProps) {
  const convoData = useSelector((state: RootState) => state.home.current_convo);
  const usersData = useSelector(
    (state: RootState) => state.app_data.users_data
  );

  const convoParticipants = convoData.channel.participants;
  const participantsToShow = getThreeParticipants(convoParticipants);

  return (
    <button onClick={onClick} className={styles['participants-button']}>
      <div className={styles['three-photos']}>
        {participantsToShow.map((participantId, index) => {
          const imageSource = usersData[participantId]
            ? usersData[participantId].avatar_src
            : '/assets/images/user-image.jpeg';

          return (
            <img
              className={`${styles['participant-photo']} ${
                index === 1 ? styles['second-photo'] : ''
              } ${index === 2 ? styles['third-photo'] : ''}`}
              src={imageSource}
              key={index}
            ></img>
          );
        })}
      </div>
      <span className={styles['participants-count']}>
        {convoParticipants.length}
      </span>
    </button>
  );
}

export default ParticipantsButton;
