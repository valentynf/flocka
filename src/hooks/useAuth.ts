import { useDispatch, useSelector } from 'react-redux';
import { setSession, getSession, getUserData } from '../store/slices/authSlice';
import { useEffect, useState } from 'react';
import supabase from '../api/supabase';
import { AppDispatch, RootState } from '../types/appTypes';

function useAuth() {
  const dispatch: AppDispatch = useDispatch();
  const session = useSelector((state: RootState) => state.auth.session);
  const [isLoadingUserData, setIsLoadingUserData] = useState<boolean>(false);
  const [isLoadingSessionData, setIsLoadingSessionData] =
    useState<boolean>(false);

  const isLoading = isLoadingUserData || isLoadingSessionData;

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        dispatch(setSession(null));
      }
    });
    setIsLoadingSessionData(true);
    dispatch(getSession()).finally(() => {
      setIsLoadingSessionData(false);
    });
  }, [dispatch]);

  useEffect(() => {
    const userEmail = session?.user.email;
    if (userEmail) {
      setIsLoadingUserData(true);
      dispatch(getUserData(userEmail)).finally(() =>
        setIsLoadingUserData(false)
      );
    }
  }, [session, dispatch]);

  return { isLoading };
}

export default useAuth;
