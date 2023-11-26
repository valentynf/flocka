import { ThreeCircles } from 'react-loader-spinner';
import styles from './AppLoadingView.module.css';

type AppLoadingViewProps = {
  message: string;
};

function AppLoadingView({ message }: AppLoadingViewProps) {
  return (
    <div className={styles['loader-overlay']}>
      <div className={styles['loader']}>
        <ThreeCircles height="200" width="200" color="#33174d" />
        <span className={styles['loading-message']}>{message}</span>
      </div>
    </div>
  );
}

export default AppLoadingView;
