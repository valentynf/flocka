import styles from './AppSidebar.module.css';

function AppSidebar() {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['top-section']}>
        <div className={styles.icon}>Icon 1</div>
        <div className={styles.icon}>Icon 2</div>
        <div className={styles.icon}>Icon 3</div>
        <div className={styles.icon}>Icon 4</div>
        <div className={styles.icon}>Icon 5</div>
        <div className={styles.icon}>Icon 6</div>
      </div>
      <div className={styles['bottom-section']}>
        <div className={styles.icon}>Icon 7</div>
        <div className={styles.icon}>Icon 8</div>
      </div>
    </div>
  );
}

export default AppSidebar;
