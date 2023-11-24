import { RealtimeChannel } from '@supabase/supabase-js';
import { USERS_TABLE } from '../../config/config';
import { AppDispatch, UserPayload } from '../../types/appTypes';
import supabase from '../supabase';
import { usersDataToRecord } from '../../utils/helper';
import { addNewUserRecord } from '../../store/slices/appDataSlice';

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

export const setUsersDataSubscription = (dispatch: AppDispatch) => {
  const usersDataSub: RealtimeChannel = supabase
    .channel('users_data_channel')
    .on(
      'postgres_changes',
      {
        event: 'INSERT',
        schema: 'public',
        table: USERS_TABLE,
      },
      (payload) => {
        const { id, name, avatar_src } = payload.new;
        dispatch(
          addNewUserRecord(usersDataToRecord([{ id, name, avatar_src }]))
        );
      }
    )
    .subscribe();

  return usersDataSub;
};

export const fetchUsersData = async () => {
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('id, name, avatar_src');

  return { data, error };
};

export const findUsersByName = async (input: string, ac: AbortController) => {
  if (input.length === 0) return { data: [], error: null };
  const { data, error } = await supabase
    .from(USERS_TABLE)
    .select('id')
    .ilike('name', `${input}%`)
    .abortSignal(ac.signal);

  return { data, error };
};
