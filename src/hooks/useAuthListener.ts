import { useDispatch, useSelector } from 'react-redux';
import { setSession, getSession, getUserData } from '../store/slices/authSlice';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../store/store';
import { supabase } from '../api/supabase';

function useAuthListener() {
  const dispatch: AppDispatch = useDispatch();
  const session = useSelector((state: RootState) => state.auth.session);

  useEffect(() => {
    dispatch(getSession());
    supabase.auth.onAuthStateChange((event) => {
      if (event == 'SIGNED_OUT') {
        dispatch(setSession(null));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const userEmail = session?.user.email;
    if (userEmail) {
      dispatch(getUserData(userEmail));
    }
  }, [session, dispatch]);
}

export default useAuthListener;
