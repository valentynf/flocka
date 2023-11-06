import styles from './PlaceholderView.module.css';

function PlaceholderView() {
  return (
    <div className={styles['placeholder']}>
      <h1 className={styles['placeholder-text']}>In development</h1>
    </div>
  );
}

export default PlaceholderView;
