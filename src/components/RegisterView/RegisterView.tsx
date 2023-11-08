import { ChangeEvent, useState } from 'react';
import styles from './RegisterView.module.css';
import { loadImageFromInput } from '../../utils/helper';
import { AppDispatch, RootState } from '../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../store/slices/authSlice';

function RegisterView() {
  const dispatch: AppDispatch = useDispatch();
  const sessionUserData = useSelector(
    (state: RootState) => state.auth.session?.user.user_metadata
  );
  const userImage = sessionUserData?.picture;
  const userEmail = sessionUserData?.email;

  const [imageSrc, setImageSrc] = useState<string>(userImage);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const onFileChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      loadImageFromInput(file, setImageSrc);
    }
  };

  return (
    <div className={styles['register-view']}>
      <div className={styles['form-container']}>
        <h2 className={styles['heading']}>Awaken a New Soul</h2>
        <form>
          <div className={styles['input-field']}>
            <label>Email</label>
            <input
              className={`${styles['disabled']} ${styles['input-label']}`}
              type="text"
              value={userEmail}
              readOnly
            />
            <p className={styles['email-description']}>
              Email you've used to login via Google, not possible to change
            </p>
          </div>
          <div className={styles['input-field']}>
            <label className={styles['input-label']}>Display Name</label>
            <input type="text" />
          </div>
          <div className={'avatar-container'}>
            <img className={styles['avatar-preview']} src={imageSrc}></img>
          </div>
          <div className={styles['upload-field']}>
            <label className={styles['input-label']}>Upload Photo</label>
            <input onChange={onFileChanged} type="file" accept="image/*" />
          </div>
          <div className={styles['buttons-container']}>
            {/* semantically wrong to include logout button in form */}
            <button
              type="button"
              onClick={handleSignOut}
              className={`${styles['button-logout']} ${styles['button']}`}
            >
              Depart
            </button>
            <button
              className={`${styles['button-submit']} ${styles['button']}`}
              type="submit"
            >
              Enroll
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterView;
