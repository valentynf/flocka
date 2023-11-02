import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/appTypes';
import { useEffect } from 'react';
import { fetchChannels } from '../store/slices/homeSlice';

function useHomeData() {
  const dispatch: AppDispatch = useDispatch();
  const channels = useSelector(
    (state: RootState) => state.auth.user_data?.channels
  );

  useEffect(() => {
    if (channels) {
      dispatch(fetchChannels(channels));
    }
  }, [channels, dispatch]);
}

export default useHomeData;
