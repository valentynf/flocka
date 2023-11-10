import { useEffect, useState } from 'react';
import { fetchParticipantsData } from '../api/services/usersApi';
import { ParticipantData } from '../types/appTypes';

function useParticipants(participants: string[]) {
  const [participantsData, setParticipantsData] = useState<ParticipantData[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchParticipantsData(participants);
        setParticipantsData(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [participants]);

  return {
    participantsData: participantsData.reduce(
      (acc: Record<string, { name: string; avatar_src: string }>, el) => {
        acc[`${el.id}`] = { name: el.name, avatar_src: el.avatar_src };
        return acc;
      },
      {}
    ),
  };
}

export default useParticipants;
