import { RealtimeChannel } from '@supabase/supabase-js';
import { CHANNELS_TABLE, RPC_SEND_MESSAGE } from '../../config/config';
import supabase from '../supabase';
import { AppDispatch, MessageData } from '../../types/appTypes';
import { addNewMessage } from '../../store/slices/homeSlice';

export const fetchChannelsData = async (channelIds: number[]) => {
  const { data, error } = await supabase
    .from(CHANNELS_TABLE)
    .select('id, name, type, participants')
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

export const rpcSendMessage = async (
  channel_id: number,
  message: MessageData
) => {
  const { data, error } = await supabase.rpc(RPC_SEND_MESSAGE, {
    channel_id,
    message,
  });
  return { data, error };
};

export const checkExistingChannel = async (
  name: string,
  ac: AbortController
): Promise<boolean> => {
  if (name.length > 3) {
    const { data } = await supabase
      .from(CHANNELS_TABLE)
      .select('name')
      .eq('name', name)
      .abortSignal(ac.signal);

    console.log(data?.length);
    if (data && data.length === 1) {
      return true;
    }
    return false;
  }
  return false;
};
