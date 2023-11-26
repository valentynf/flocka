import styles from './LoginView.module.css';
import PortalLogo from '../../icons/LoginView/PortalLogo/PortalLogo';
import FlockaIcon from '../../icons/LoginView/FlockaIcon';
import { signInWithOAuth } from '../../store/slices/authSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../types/appTypes';

function LoginView() {
  const dispatch: AppDispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(signInWithOAuth());
  };

  return (
    <div className={styles['login-container']}>
      <div className={styles['info']}>
        <div className={styles['flocka-logo']}>
          <FlockaIcon />
          <h3 className={styles['app-name']}>flocka</h3>
        </div>
        <h2 className={styles['slogan']}>
          Flocka, <br /> where whispers converge,
          <br /> and in the depths of darkness,
          <br />
          they entwine.
        </h2>
        <button className={styles['login-button']} onClick={handleSignIn}>
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
