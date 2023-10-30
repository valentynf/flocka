import { supabase } from './supabase';

export const authLogin = async () =>
  supabase.auth.signInWithOAuth({ provider: 'google' });

export const authSignOut = async () => supabase.auth.signOut();

export const authGetSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { data: data.session, error };
};

export const fetchUserData = async (email: string) => {
  const { data, error } = await supabase
    .from('app-users')
    .select('*')
    .eq('email', email);

  return { data, error };
};
