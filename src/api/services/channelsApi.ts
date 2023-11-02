import { CHANNELS_TABLE } from '../../config/config';
import supabase from '../supabase';

export const fetchChannelsData = async (channelIds: number[]) => {
  const { data, error } = await supabase
    .from(CHANNELS_TABLE)
    .select('id, name, type')
    .in('id', channelIds);

  return { data, error };
};

export const fetchCurrentChannel = async (channelId: number) => {
  const { data, error } = await supabase
    .from(CHANNELS_TABLE)
    .select('id, name, messages, type')
    .eq('id', channelId);
  console.log(data);

  return { data: data ? data[0] : data, error };
};
