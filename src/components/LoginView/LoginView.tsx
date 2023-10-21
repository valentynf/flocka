import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import styles from './LoginView.module.css';
import { useEffect, useState } from 'react';

function LoginView() {
  const [user, setUser] = useState<TokenResponse>({} as TokenResponse);

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setUser(tokenResponse),
  });

  useEffect(() => {
    if (user.access_token) {
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json',
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(
          (data) => {
            console.log(data);
          },
          [user]
        );
    }
  });

  return (
    <div className={styles['login-container']}>
      <button onClick={() => login()}> LOGIN VIA GOGLE</button>
    </div>
  );
}

export default LoginView;
