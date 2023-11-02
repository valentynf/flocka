import { CHANNELS_TABLE } from '../../config/config';
import supabase from '../supabase';

export const fetchChannelsData = async (channelIds: number[]) => {
  const { data, error } = await supabase
    .from(CHANNELS_TABLE)
    .select('id, name, type')
    .in('id', channelIds);

  return { data, error };
};
