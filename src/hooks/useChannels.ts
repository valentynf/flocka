import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/appTypes';
import { useEffect } from 'react';
import { getChannels } from '../store/slices/homeSlice';

function useChannels() {
  const dispatch: AppDispatch = useDispatch();
  const channels = useSelector(
    (state: RootState) => state.auth.user_data?.channels
  );

  useEffect(() => {
    if (channels) {
      dispatch(getChannels(channels));
    }
  }, [channels, dispatch]);
}

export default useChannels;
