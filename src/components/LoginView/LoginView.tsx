import { GoogleLogin } from '@react-oauth/google';
import styles from './LoginView.module.css';

function LoginView() {
  return (
    <div className={styles['login-container']}>
      <GoogleLogin
        theme="filled_black"
        onSuccess={(credRes) => console.log(credRes)}
        onError={() => console.log('login failed')}
      />
    </div>
  );
}

export default LoginView;
