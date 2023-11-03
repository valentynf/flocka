import { useEffect } from 'react';
import { setChannelSubscription } from '../api/services/channelsApi';
import { useDispatch } from 'react-redux';

function useChannelSub(channelId: number | undefined) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (channelId != undefined) {
      const room = setChannelSubscription(channelId, dispatch);

      return () => {
        room.unsubscribe();
      };
    }
  }, [channelId, dispatch]);
}

export default useChannelSub;
