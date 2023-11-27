import { RealtimeChannel } from '@supabase/supabase-js';
import {
  CHANNELS_TABLE,
  RPC_ADD_PARTICIPANTS_PUBLIC_CHANNEL,
  RPC_CREATE_PUBLIC_CHANNEL,
  RPC_SEND_MESSAGE,
  USERS_TABLE,
} from '../../config/config';
import supabase from '../supabase';
import {
  AppDispatch,
  ChannelsTableRecord,
  MessageData,
} from '../../types/appTypes';
import {
  addNewMessage,
  addNewParticipants,
  getNewChannel,
} from '../../store/slices/homeSlice';
import { getConversationUpdates } from '../../utils/helper';

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

//this
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
        const update = getConversationUpdates(
          payload.old as ChannelsTableRecord,
          payload.new as ChannelsTableRecord
        );
        if (update) {
          if (update.trigger === 'new-message') {
            dispatch(addNewMessage(update.data));
          }
          if (update.trigger === 'new-participants') {
            dispatch(
              addNewParticipants({
                newParticipants: update.data,
                channelId: payload.new.id,
              })
            );
          }
        }
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
// 1. Creates a new table row with creator(user_id) as the only participant
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

// This call also does several things
// 1. Adds new members ids to the list of the participants of the channel with channel_id
// 2. In the app-users table, adds the channel in question to the list of the channels for the new members
// 3. Returns great success
export const rpcAddParticipantsPublicChannel = async (
  channel_id: number,
  new_members_ids: string[]
) => {
  const { data, error } = await supabase.rpc(
    RPC_ADD_PARTICIPANTS_PUBLIC_CHANNEL,
    { channel_id, new_members_ids }
  );
  return { data, error };
};
