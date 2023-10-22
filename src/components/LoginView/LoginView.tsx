import styles from './LoginView.module.css';
import useUser from '../../hooks/useUser';

function LoginView() {
  const { login } = useUser();

  return (
    <div className={styles['login-container']}>
      <button className={styles['login-button']} onClick={() => login()}>
        {' '}
        Login with Google
      </button>
    </div>
  );
}

export default LoginView;
