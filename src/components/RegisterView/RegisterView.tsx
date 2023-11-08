import styles from './RegisterView.module.css';

function RegisterView() {
  return (
    <div className={styles['register-view']}>
      <div className={styles['form-container']}>
        <h2 className={styles['heading']}>Register New User</h2>

        <form>
          <div className={styles['input-field']}>
            <label>Email</label>
            <input
              className={styles['disabled']}
              type="text"
              value="user@email.com"
              readOnly
            />
            <p className={styles['email-description']}>
              Email you've used to login via Google, not possible to change
            </p>
          </div>
          <div className={styles['input-field']}>
            <label>Display Name</label>
            <input type="text" />
          </div>
          <div className={styles['upload-field']}>
            <label>Upload Image</label>
            <input type="file" accept="image/*" />
          </div>
          <div className="form-field">
            <button type="submit">Register</button>
            <button className="logout-button">Logout</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterView;
