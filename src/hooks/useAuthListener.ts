import { useDispatch, useSelector } from 'react-redux';
import { setSession, getSession, getUserData } from '../store/slices/authSlice';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../store/store';
import { supabase } from '../api/supabase';

function useAuthListener() {
  const dispatch: AppDispatch = useDispatch();
  const session = useSelector((state: RootState) => state.auth.session);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == 'SIGNED_OUT') {
        dispatch(setSession(null));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    if (session == null) {
      dispatch(getSession());
    }

    const userEmail = session?.user.email;
    if (userEmail && session != null) {
      dispatch(getUserData(userEmail));
    }
  });
}

export default useAuthListener;
