import supabase from '../supabase';

export const authLogin = async () =>
  supabase.auth.signInWithOAuth({
    provider: 'google',
    //temporary solution for local dev process
    options: {
      redirectTo: 'http://localhost:5173/app',
    },
  });

export const authSignOut = async () => supabase.auth.signOut();

export const authGetSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  return { session: data.session, error };
};
