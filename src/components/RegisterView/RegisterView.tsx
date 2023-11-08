import styles from './RegisterView.module.css';

function RegisterView() {
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
              value="user@email.com"
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
            <img
              className={styles['avatar-preview']}
              src="/src/assets/images/user-image.jpeg"
            ></img>
          </div>
          <div className={styles['upload-field']}>
            <label className={styles['input-label']}>Upload Photo</label>
            <input type="file" accept="image/*" />
          </div>
          <div className={styles['buttons-container']}>
            {/* semantically wrong to include logout button in form */}
            <button
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
