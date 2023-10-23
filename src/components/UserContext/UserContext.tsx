import { createContext, useEffect, useState } from 'react';
import { UserDataType } from '../../types/appTypes';
import { Session, createClient } from '@supabase/supabase-js';

type UserContextType = {
  user_data: UserDataType;
  login: () => void;
  logout: () => void;
  session: Session | null;
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
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log(data);
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((event, session) => {
      console.log('on oauth state change', { event, session });
      if (event === 'SIGNED_OUT') {
        console.log('signed out');
      }
    });
  }, []);

  async function login() {
    supabase.auth
      .signInWithOAuth({ provider: 'google' })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  function logout() {
    supabase.auth
      .signOut()
      .then(() => {
        setSession(null);
      })
      .catch((err) => console.error('Logout failed', err));
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
