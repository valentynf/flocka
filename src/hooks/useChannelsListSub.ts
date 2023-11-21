import { useEffect } from 'react';
import { AppDispatch, RootState } from '../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { setChannelsListSubscription } from '../api/services/channelsApi';

function useChannelsListSub() {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.auth.user_data);
  const userId = userData?.id;

  useEffect(() => {
    if (userId != undefined) {
      const room = setChannelsListSubscription(userId, dispatch);
      console.log('subscriiption here', userId);

      return () => {
        console.log('unsib');
        room.unsubscribe();
      };
    }
  }, [userId, dispatch]);
}

export default useChannelsListSub;
