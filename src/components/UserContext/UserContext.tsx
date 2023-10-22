import { createContext, useState } from 'react';
import { UserDataType } from '../../types/appTypes';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

const USER_INFO_API = 'https://www.googleapis.com/oauth2/v1/userinfo';

type UserContextType = {
  user_data: UserDataType;
  login: () => void;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

type UserDataProviderProps = {
  children: React.ReactNode;
};

function UserDataProvider({ children }: UserDataProviderProps) {
  const [userData, setUserData] = useState<UserDataType>({} as UserDataType);

  function fetchUserData(token: string) {
    fetch(`${USER_INFO_API}?access_token=${token}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const { email, picture, given_name } = data;
        console.log(email, picture, given_name);
        setUserData({ name: given_name, avatar_src: picture, email });
      });
  }

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => fetchUserData(tokenResponse.access_token),
    onError: (err) => console.error(err),
  });

  function logout() {
    googleLogout();
    setUserData({} as UserDataType);
  }

  return (
    <UserContext.Provider
      value={{
        user_data: userData,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserDataProvider;
