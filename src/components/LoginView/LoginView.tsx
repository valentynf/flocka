import styles from './LoginView.module.css';
import PortalLogo from '../../icons/LoginView/PortalLogo/PortalLogo';
import FlockaIcon from '../../icons/LoginView/FlockaIcon';
import { useDispatch } from 'react-redux';
import { login, getSession } from '../../store/slices/authSlice';
import { useEffect } from 'react';
import { AppDispatch } from '../../store/store';

function LoginView() {
  const dispatch: AppDispatch = useDispatch();

  function handleLogin() {
    dispatch(login());
  }

  //not clever workaround for getting session info (if we're logged in)
  useEffect(() => {
    dispatch(getSession());
  });

  return (
    <div className={styles['login-container']}>
      <div className={styles['info']}>
        <div className={styles['flocka-logo']}>
          <FlockaIcon />
          <h3 className={styles['app-name']}>flocka</h3>
        </div>
        <h2 className={styles['slogan']}>
          Flocka, where whispers converge and in the depths of darkness, they
          entwine.
        </h2>
        <button className={styles['login-button']} onClick={handleLogin}>
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
