import { AVATAR_BUCKET, AVATAR_STORAGE_URL } from '../../config/config';
import supabase from '../supabase';

export const uploadAvatar = async (file: File) => {
  const { data, error } = await supabase.storage
    .from(AVATAR_BUCKET)
    .upload(`avatar_${Date.now()}.png`, file);
  if (error) throw error;

  return `${AVATAR_STORAGE_URL}${data.path}`;
};
