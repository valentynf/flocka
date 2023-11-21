import { useEffect, useState } from 'react';
import { setConversationSubscription } from '../api/services/channelsApi';
import { useDispatch } from 'react-redux';
import { getChannelConvo } from '../store/slices/homeSlice';
import { AppDispatch } from '../types/appTypes';

function useConvoSub(channelId: number | undefined) {
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  //temporarily added loading messages here as well
  useEffect(() => {
    if (channelId != undefined) {
      setIsLoadingMessages(true);
      dispatch(getChannelConvo(channelId)).finally(() => {
        setIsLoadingMessages(false);
      });
    }
  }, [channelId, dispatch]);

  useEffect(() => {
    if (channelId != undefined) {
      const room = setConversationSubscription(channelId, dispatch);

      return () => {
        room.unsubscribe();
      };
    }
  }, [channelId, dispatch]);

  return isLoadingMessages;
}

export default useConvoSub;
