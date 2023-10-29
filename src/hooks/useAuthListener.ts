import { useDispatch } from 'react-redux';
import { supabase, setSession, getSession } from '../store/slices/authSlice';
import { useEffect } from 'react';
import { AppDispatch } from '../store/store';

function useAuthListener() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getSession());

    supabase.auth.onAuthStateChange((event, session) => {
      if (event == 'SIGNED_IN') {
        dispatch(setSession(session));
      }
      if (event == 'SIGNED_OUT') {
        dispatch(setSession(null));
      }
    });
  }, [dispatch]);
}

export default useAuthListener;
