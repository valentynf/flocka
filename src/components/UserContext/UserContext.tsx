import { createContext, useEffect, useState } from 'react';
import { UserDataType } from '../../types/appTypes';
import { Session, createClient } from '@supabase/supabase-js';

type UserContextType = {
  user_data: UserDataType | null;
  session: Session | null;
  login: () => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type UserDataProviderProps = {
  children: React.ReactNode;
};

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

function UserDataProvider({ children }: UserDataProviderProps) {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    //returns session (from localStorage), refreshing it if necessary.
    //to get user info from db use supabase.auth.getUser()
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_OUT') {
        setSession(null);
      }
      if (event === 'SIGNED_IN' && session != null) {
        const { email, full_name, picture } = session.user.user_metadata;
        setUserData({
          name: full_name,
          email,
          avatar_src: picture,
          id: session.user.id,
        });
      }
    });
  }, []);

  function login() {
    supabase.auth
      .signInWithOAuth({ provider: 'google' })
      .catch((err) => console.error('Login failed:', err));
  }

  function logout() {
    supabase.auth
      .signOut()
      .catch((err) => console.error('Logout failed:', err));
  }

  return (
    <UserContext.Provider
      value={{
        user_data: userData,
        login,
        logout,
        session,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserDataProvider;
