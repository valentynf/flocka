import { useEffect } from 'react';
import { AppDispatch } from '../types/appTypes';
import { useDispatch } from 'react-redux';
import { getUsersData } from '../store/slices/appDataSlice';
import { setUsersDataSubscription } from '../api/services/usersApi';

function useAppData() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const appDataSub = setUsersDataSubscription(dispatch);

    return () => {
      appDataSub.unsubscribe();
    };
  });

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
}

export default useAppData;
