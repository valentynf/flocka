import { useEffect } from 'react';
import { AppDispatch } from '../types/appTypes';
import { useDispatch } from 'react-redux';
import { getUsersData } from '../store/slices/appDataSlice';

function useAppData() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
}

export default useAppData;
