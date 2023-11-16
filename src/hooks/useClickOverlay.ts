import { useEffect } from 'react';

function useClickOverlay(
  elementRef: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleOverlayClick = (event: MouseEvent) => {
      if (elementRef.current && elementRef.current === (event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleOverlayClick);

    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, [elementRef, callback]);
}
export default useClickOverlay;
