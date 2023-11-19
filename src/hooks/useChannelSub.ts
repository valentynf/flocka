import { useEffect, useState } from 'react';
import { setChannelSubscription } from '../api/services/channelsApi';
import { useDispatch } from 'react-redux';
import { getChannelConvo } from '../store/slices/homeSlice';
import { AppDispatch } from '../types/appTypes';

function useChannelSub(channelId: number | undefined) {
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

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
      const room = setChannelSubscription(channelId, dispatch);

      return () => {
        room.unsubscribe();
      };
    }
  }, [channelId, dispatch]);

  return isLoadingMessages;
}

export default useChannelSub;
