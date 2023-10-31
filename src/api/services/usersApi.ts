import { USERS_TABLE } from '../../config/config';
import { supabase } from '../supabase';

export const fetchUserData = async (userEmail: string) => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('id, email, name, avatar_src')
    .eq('email', userEmail);

  return { data: data ? data[0] : null, error };
};
