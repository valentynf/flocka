import { RealtimeChannel } from '@supabase/supabase-js';
import { CHANNELS_TABLE } from '../../config/config';
import supabase from '../supabase';
import { AppDispatch } from '../../types/appTypes';
import { addNewMessage } from '../../store/slices/homeSlice';

export const fetchChannelsData = async (channelIds: number[]) => {
  const { data, error } = await supabase
    .from(CHANNELS_TABLE)
    .select('id, name, type')
    .in('id', channelIds);

  return { data, error };
};

export const fetchChannelMessages = async (channelId: number) => {
  const { data, error } = await supabase
    .from(CHANNELS_TABLE)
    .select('messages')
    .eq('id', channelId);
  return { data: data ? data[0] : null, error };
};

export const setChannelSubscription = (
  channelId: number,
  dispatch: AppDispatch
) => {
  const channelSub: RealtimeChannel = supabase
    .channel(`channel_${channelId}`)
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'channels',
        filter: `id=eq.${channelId}`,
      },
      (payload) => {
        dispatch(addNewMessage(payload.new['messages'][0]));
      }
    )
    .subscribe();

  return channelSub;
};
