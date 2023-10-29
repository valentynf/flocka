import { useDispatch } from 'react-redux';
import { supabase, setSession } from '../store/slices/authSlice';
import { useEffect } from 'react';

function useAuthListener() {
  const dispatch = useDispatch();

  useEffect(() => {
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
