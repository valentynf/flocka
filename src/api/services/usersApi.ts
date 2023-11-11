import { USERS_TABLE } from '../../config/config';
import { UserPayload } from '../../types/appTypes';
import supabase from '../supabase';

export const fetchUserData = async (userEmail: string) => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('id, email, name, avatar_src, channels')
    .eq('email', userEmail);

  //temporarily or not modified function to return null if there's no matches in db
  return { data: data && data.length > 0 ? data[0] : null, error };
};

export const insertUserData = async (newUserData: UserPayload) => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .insert(newUserData)
    .select('id, email, name, avatar_src, channels');

  return { data: data ? data[0] : null, error };
};

export const fetchUsersData = async () => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('id, name, avatar_src');

  return { data, error };
};
