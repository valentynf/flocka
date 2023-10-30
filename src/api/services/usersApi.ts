import { USERS_TABLE } from '../../config/config';
import { supabase } from '../supabase';

export const fetchUserData = async (email: string) => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('*')
    .eq('email', email);

  return { data, error };
};
