import { useSelector } from 'react-redux';
import styles from './ParticipantsButton.module.css';
import { RootState } from '../../../../../../types/appTypes';

function ParticipantsButton() {
  const convoData = useSelector((state: RootState) => state.home.current_convo);

  const participants = convoData.channel.participants;

  return (
    <button className={styles['participants-button']}>
      <div className={styles['three-photos']}></div>
      <span>{participants.length}</span>
    </button>
  );
}

export default ParticipantsButton;
