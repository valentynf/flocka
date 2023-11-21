import { RealtimeChannel } from '@supabase/supabase-js';
import {
  CHANNELS_TABLE,
  RPC_CREATE_PUBLIC_CHANNEL,
  RPC_SEND_MESSAGE,
  USERS_TABLE,
} from '../../config/config';
import supabase from '../supabase';
import { AppDispatch, MessageData } from '../../types/appTypes';
import { addNewMessage, getNewChannel } from '../../store/slices/homeSlice';

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

export const setConversationSubscription = (
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
        table: CHANNELS_TABLE,
        filter: `id=eq.${channelId}`,
      },
      (payload) => {
        dispatch(addNewMessage(payload.new['messages'][0]));
      }
    )
    .subscribe();

  return channelSub;
};

export const setChannelsListSubscription = (
  userId: string,
  dispatch: AppDispatch
) => {
  const channelsListSub: RealtimeChannel = supabase
    .channel(`channels_list_${userId}`)
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: USERS_TABLE,
        filter: `id=eq.${userId}`,
      },
      (payload) => {
        const channels = payload.new['channels'];
        dispatch(getNewChannel(channels[channels.length - 1]));
      }
    )
    .subscribe();

  return channelsListSub;
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

    if (data && data.length === 1) {
      return true;
    }
    return false;
  }
  return false;
};

//RPC

// This call only adds the message to the array of messages
// Returns 'message sent'
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

// This call does several things
// 1. Creates a new table with creator (user_id) as the only participant
// 2. Adds channel to the channels list of the creator
// 3. Returns new channel id
export const rpcCreatePublicChannel = async (
  channel_name: string,
  user_id: string
) => {
  const { data, error } = await supabase.rpc(RPC_CREATE_PUBLIC_CHANNEL, {
    channel_name,
    user_id,
  });
  return { data, error };
};
