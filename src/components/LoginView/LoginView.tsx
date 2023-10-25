import styles from './LoginView.module.css';
import useUser from '../../hooks/useUser';
import PortalLogo from '../../icons/LoginView/PortalLogo/PortalLogo';

function LoginView() {
  const { login } = useUser();

  return (
    <div className={styles['login-container']}>
      <div className={'info'}>
        <h3 className={styles['app-name']}>flocka</h3>
        <h2 className={styles['slogan']}>
          Flocka, where whispers converge and in the depths of darkness, they
          entwine.
        </h2>
        <button className={styles['login-button']} onClick={login}>
          {' '}
          Sign in to Flocka
        </button>
        <p className={styles['login-description']}>
          The button becomes your gateway to the abyss, drawing you into the
          depths of your Google account. Once ensnared, it will return you to
          the app, forever changed.
        </p>
      </div>
      <div className={styles['logo-container']}>
        <PortalLogo />
      </div>
    </div>
  );
}

export default LoginView;
