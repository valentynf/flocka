import { ChangeEvent, useState } from 'react';
import styles from './RegisterView.module.css';
import { isMatchingThePattern, loadImageFromInput } from '../../utils/helper';
import { AppDispatch, RootState } from '../../types/appTypes';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser, signOut } from '../../store/slices/authSlice';
import { uploadAvatar } from '../../api/services/storageBucketApi';
import { ThreeCircles } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

function RegisterView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [nameInputValue, setNameInputValue] = useState<string>('');
  const dispatch: AppDispatch = useDispatch();
  const sessionUserData = useSelector(
    (state: RootState) => state.auth.session?.user
  );
  const navigate = useNavigate();

  const userImageSrc = sessionUserData?.user_metadata.picture;
  const userEmail = sessionUserData?.user_metadata.email;
  const userId = sessionUserData?.id;

  const [imageSrc, setImageSrc] = useState<string>(userImageSrc);

  const handleSignOut = () => {
    dispatch(signOut());
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(e.target.value);
  };

  const onFileChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      loadImageFromInput(file, setImageSrc);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const avatar = data.get('avatarFile') as File;
    const name = data.get('name') as string;
    let avatar_src = userImageSrc;

    if (avatar.size > 0) {
      try {
        setIsLoading(true);
        const res = await uploadAvatar(avatar);
        avatar_src = res;
      } catch (err) {
        console.error('Could not upload the avatar:', err);
        setIsLoading(false);
      }
    }

    if (userEmail && userId) {
      setIsLoading(true);
      dispatch(
        createNewUser({ id: userId, email: userEmail, name, avatar_src })
      )
        .catch((err) => {
          console.error('Could not create a new user:', err);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
          navigate('/app');
        });
    }
  };

  return (
    <div className={styles['register-view']}>
      <div className={styles['form-container']}>
        <div className={styles['form-header']}>
          <img
            className={styles['torch-image']}
            src="src/assets/images/torch.gif"
          ></img>
          <h2 className={styles['heading']}>Awaken a New Soul</h2>
          <img
            className={styles['torch-image']}
            src="src/assets/images/torch.gif"
          ></img>
        </div>
        {isLoading ? (
          <div className={styles['spinner']}>
            <ThreeCircles height="100" width="100" color="#33174d" />
          </div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className={styles['input-field']}>
              <label>Email</label>
              <input
                className={`${styles['disabled']} ${styles['input-label']}`}
                type="text"
                value={userEmail}
                readOnly
              />
              <p className={styles['description']}>
                Email you've used to login via Google, not possible to change
              </p>
            </div>
            <div className={styles['input-field']}>
              <label className={styles['input-label']}>Display Name</label>
              <input
                value={nameInputValue}
                pattern="^[a-zA-Z ]{6,25}$"
                onChange={handleInputChange}
                name="name"
                type="text"
                title="Name must be between 6 and 25 symbols, including one space"
                autoComplete="off"
                maxLength={25}
                required
              />
            </div>
            <div>
              <img className={styles['avatar-preview']} src={imageSrc}></img>
            </div>
            <div className={styles['upload-field']}>
              <label className={styles['input-label']}>Upload Photo</label>
              <input
                name="avatarFile"
                onChange={onFileChanged}
                type="file"
                accept="image/jpeg, image/png"
              />
              <p className={styles['description']}>
                jpeg/png, file size limit: 512kb
              </p>
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
                disabled={
                  isLoading ||
                  !isMatchingThePattern(nameInputValue, '^[a-zA-Z ]{6,25}$')
                }
              >
                Enroll
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegisterView;
