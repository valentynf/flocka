import { useEffect } from 'react';

function useClickedOutsideDiv(
  elementRef: React.RefObject<HTMLDivElement>,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [elementRef, callback]);
}

export default useClickedOutsideDiv;
