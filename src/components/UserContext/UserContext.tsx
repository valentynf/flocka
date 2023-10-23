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
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') {
        setSession(null);
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
