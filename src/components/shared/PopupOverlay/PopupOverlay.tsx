import { ReactNode, useRef } from 'react';
import styles from './PopupOverlay.module.css';
import useClickOverlay from '../../../hooks/useClickOverlay';

type PopupOverlayProps = {
  onClick: () => void;
  children: ReactNode;
};

function PopupOverlay({ children, onClick }: PopupOverlayProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useClickOverlay(overlayRef, onClick);

  return (
    <div ref={overlayRef} className={styles['overlay']}>
      {children}
    </div>
  );
}

export default PopupOverlay;
